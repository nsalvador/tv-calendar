const axios = require("axios");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});

const s3 = new AWS.S3();

const util = require('../util');

const API_KEY = process.env.API_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = class Show {
  constructor(show) {
    this.show = show;
  }

  static getShows() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        MONGODB_URI,
        (error, db) => {
          try {
            if (error) throw error;
            db.collection("subscriptions")
              .find({})
              .sort({ seriesName: 1 })
              .toArray((error, result) => {
                if (error) throw error;
                resolve(result);
              });
          } catch (error) {
            reject();
          }
        }
      );

    });
  }

  static getShowsByDay(day) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        MONGODB_URI,
        (error, db) => {
          try {
            if (error) throw error;
            db.collection("subscriptions")
              .find({
                airsDayOfWeek: day
              })
              .sort({ seriesName: 1 })
              .toArray((error, result) => {
                if (error) throw error;
                resolve(result);
              });
          } catch (error) {
            reject();
          }
        }
      );
    });
  }

  delete() {
    return new Promise((resolve, reject) => {
      let show = this.show;
      MongoClient.connect(
        MONGODB_URI,
        (error, db) => {
          try {
            if (error) throw error;
            db.collection("subscriptions").deleteOne({
              _id: show.id.toString()
            }, error => {
              if (error) throw error;
              s3.deleteObject({
                Bucket: "tv-calendar-assets",
                Key: show.posterKey
              },
                error => {
                  if (error) throw error;
                  resolve();
                }
              );
            });
          }
          catch (error) {
            reject();
          }
        }
      );
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      let show = this.show;
      let response = null;
      let posterKey = show.posterKey;
      let filename = path.join(__dirname, posterKey);
      let url = `https://www.thetvdb.com/banners/posters/${posterKey}`;
      MongoClient.connect(
        MONGODB_URI,
        async (error, db) => {
          try {
            if (error) throw error;
            response = await axios({ url, responseType: "stream" });
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
                    fs.unlink(filename, (error) => {
                      if (error) throw error;
                      db.close();
                      resolve();
                    });
                  });
                }
              );
            });
          }
          catch (error) {
            reject();
          }
        }
      );
    });
  }

  static search(title) {
    return new Promise(async (resolve, reject) => {
      let [response, series] = [2].fill(null);
      try {
        response = await axios.post("/login", {
          apikey: API_KEY
        });
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        response = await axios.get("/search/series", {
          params: { name: title }
        });
        series = response.data.data;
        for (let item of series) {
          await util.getSource(item);
          await util.getDayOfWeek(item);
        }
        resolve(series);
      }
      catch (error) {
        reject(error);
      }
    });
  }
};