const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const fs = require("fs");
const axios = require('axios');

const Show = require('./show');

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});
const s3 = new AWS.S3();

const MONGODB_URI = process.env.MONGODB_URI;

module.exports = class Subscriptions {
  get(value) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        MONGODB_URI,
        (error, db) => {
          try {
            if (error) throw error;
            db.collection('subscriptions')
              .find({})
              .sort({ seriesName: 1 })
              .toArray(async (error, dataSet) => {
                if (error) throw error;
                let data = [];
                for (let show of dataSet) {
                  data.push(await Show.get(show));
                }
                if (value !== 'all') {
                  data = data.filter(show => {
                    return show.airsDayOfWeek === value
                  });
                }
                db.close();
                resolve(data);
              });
          }
          catch (error) {
            reject(error);
          }
        }
      );
    });
  }

  remove(show) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        MONGODB_URI,
        (error, db) => {
          try {
            if (error) throw error;
            s3.deleteObject({
              Bucket: 'tv-calendar-assets',
              Key: show.posterKey
            }, error => {
              if (error) throw error
              db.collection('subscriptions').deleteOne({
                _id: show._id
              }, error => {
                if (error) throw error;
                db.close();
                resolve('Success');
              })
            });
          }
          catch (error) {
            reject(error);
          }
        }
      );
    });
  }

  add(show) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(MONGODB_URI, async (error, db) => {
        try {
          if (error) throw error;
          let response = null;
          let posterKey = show.posterKey;
          let filename = path.join(__dirname, posterKey);
          let url = `https://www.thetvdb.com/banners/posters/${posterKey}`;
          response = await axios({ url, responseType: 'stream' });
          response.data.pipe(fs.createWriteStream(filename)).on('close', () => {
            s3.upload({
              Bucket: 'tv-calendar-assets',
              Key: posterKey,
              ACL: 'public-read',
              ContentEncoding: 'base64',
              ContentType: 'image/jpeg',
              Body: fs.createReadStream(filename)
            }, error => {
              if (error) throw error;
              db.collection('subscriptions').insertOne(show, error => {
                if (error) throw error;
                fs.unlink(filename, error => {
                  if (error) throw error;
                  db.close();
                  resolve('Success');
                })
              });
            });
          });
        }
        catch (error) {
          reject(error);
        }
      });
    });
  }
}