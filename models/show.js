const axios = require("axios");
const AWS = require("aws-sdk");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const fs = require("fs");

const util = require('../util');

const API_KEY = process.env.API_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});

const s3 = new AWS.S3();

axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = class Show {
  constructor(show) {
    this.show = show;
  }

  save() {
    MongoClient.connect(
      MONGODB_URI,
      async (error, db) => {
        try {
          if (error) throw error;
          let posterKey = this.show.posterKey,
            filename = path.join(__dirname, posterKey),
            url = `https://www.thetvdb.com/banners/posters/${posterKey}`;
          let response = await axios({ url, responseType: "stream" });
          response.data.pipe(fs.createWriteStream(filename)).on("close", () => {
            s3.upload(
              {
                Bucket: "tv-calendar-assets",
                Key: posterKey,
                ACL: "public-read",
                ContentEncoding: "base64",
                ContentType: "image/jpeg",
                Body: fs.createReadStream(filename)
              },
              (error, data) => {
                if (error) throw error;
                this.show.posterUrl = data.Location;
                this.show._id = this.show.id.toString();
                delete this.show.id;
                db.collection("subscriptions").insertOne(this.show, error => {
                  if (error) throw error;
                  fs.unlink(filename, error => {
                    if (error) throw error;
                    db.close();
                    return Promise.resolve();
                  });
                });
              }
            );
          });
        } catch (error) {
          return Promise.reject();
        }
      }
    );
  }

  delete() {
    MongoClient.connect(
      MONGODB_URI,
      (error, db) => {
        try {
          if (error) throw error;
          db.collection("subscriptions").deleteOne({
            _id: this.show.id.toString()
          }, error => {
            if (error) throw error;
            s3.deleteObject({
              Bucket: "tv-calendar-assets",
              Key: this.show.posterKey
            },
              error => {
                if (error) throw error;
                return Promise.resolve();
              }
            );
          });
        }
        catch (error) {
          return Promise.reject();
        }
      }
    );
  }

  static async search(title) {
    try {
      let response = await axios.post("/login", {
        apikey: API_KEY
      });
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      response = await axios.get("/search/series", {
        params: { name: title }
      });
      let series = response.data.data;
      for (let item of series) {
        await util.getSource(item);
        await util.getDayOfWeek(item);
      }
      return Promise.resolve(series);
    }
    catch (error) {
      return Promise.reject(error);
    }
  }
};