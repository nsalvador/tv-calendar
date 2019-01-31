const axios = require("axios");
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");

const util = require('../util');

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});

const s3 = new AWS.S3();

const API_KEY = process.env.API_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = {
  deleteShow: (req, res) => {
    let show = req.body;
    MongoClient.connect(
      MONGODB_URI,
      (error, db) => {
        try {
          if (error) throw error;
          db.collection("subscriptions").deleteOne({ _id: show.id.toString() }, error => {
            if (error) throw error;
            s3.deleteObject(
              {
                Bucket: "tv-calendar-assets",
                Key: show.posterKey
              },
              error => {
                if (error) throw error;
                res.json();
              }
            );
          });
        } catch (error) {
          res.json();
        }
      }
    );
  },
  postShowSave: (req, res) => {
    MongoClient.connect(
      MONGODB_URI,
      async (error, db) => {
        try {
          if (error) throw error;
          let show = req.body,
            posterKey = show.posterKey,
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
                show.posterUrl = data.Location;
                show._id = show.id.toString();
                delete show.id;
                db.collection("subscriptions").insertOne(show, error => {
                  if (error) throw error;
                  fs.unlink(filename, error => {
                    if (error) throw error;
                    db.close();
                    res.json();
                  });
                });
              }
            );
          });
        } catch (error) {
          res.json();
        }
      }
    );
  },
  postShowSearch: async (req, res) => {
    try {
      let response = await axios.post("/login", {
        apikey: API_KEY
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        response.data.token
        }`;
      response = await axios.get("/search/series", {
        params: { name: req.body.show }
      });
      let series = response.data.data;
      for (let item of series) {
        await util.getSource(item);
        await util.getDayOfWeek(item);
      }
      res.json({ data: series });
    } catch (error) {
      res.status(error.response.status).json({
        data: { message: error.response.data.Error }
      });
    }
  }
};