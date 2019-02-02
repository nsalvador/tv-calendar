const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const AWS = require("aws-sdk");

const MONGODB_URI = process.env.MONGODB_URI;

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});

const s3 = new AWS.S3();

const Show = require('../models/show');

module.exports = {
  deleteShow: (req, res) => {
    let show = req.body;
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
                res.json();
              }
            );
          });
        }
        catch (error) {
          res.json();
        }
      }
    );
  },

  postShowSave: (req, res) => {
    let show = req.body;
    let posterKey = show.posterKey;
    let filename = path.join(__dirname, posterKey);
    let url = `https://www.thetvdb.com/banners/posters/${posterKey}`;
    MongoClient.connect(
      MONGODB_URI,
      async (error, db) => {
        try {
          if (error) throw error;
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
      let series = await Show.search(req.body.show);
      res.json({ data: series });
    }
    catch (error) {
      res.status(error.response.status).json({
        data: { message: error.response.data.Error }
      });
    }
  }
};