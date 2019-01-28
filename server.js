if (process.env.NODE_ENV !== 'production') { require('./config'); }

const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const AWS = require("aws-sdk");

const port = process.env.PORT
const API_KEY = process.env.API_KEY;
const MONGODB_URI = process.env.MONGODB_URI;

AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});

const s3 = new AWS.S3();

axios.defaults.baseURL = "https://api.thetvdb.com";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function getSource(item) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`/series/${item.id}/images`);
      let count = response.data.data.poster;
      if (count !== 0) {
        response = await axios.get(`/series/${item.id}/images/query`, {
          params: { keyType: "poster" }
        });
        let source =
          response.data.data[Math.floor(Math.random() * count + 1) - 1]
            .fileName;
        item.posterKey = source !== "" ? source.split("/")[1] : "";
        resolve();
      } else {
        throw { response: { status: 404 } };
      }
    } catch (error) {
      switch (error.response.status) {
        case 404:
          item.posterKey = "";
          resolve();
          break;
        case 401:
          reject({ data: { message: error.response.data.Error } });
          break;
      }
    }
  });
}

function getDayOfWeek(item) {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post("/login", {
        apikey: API_KEY
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        response.data.token
        }`;
      response = await axios.get(`/series/${item.id}`);
      item.airsDayOfWeek = response.data.data.airsDayOfWeek;
      resolve();
    } catch (error) {
      reject({
        data: { message: error.response.data.Error }
      });
    }
  });
}

app.post("/show/search", async (req, res) => {
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
      await getSource(item);
      await getDayOfWeek(item);
    }
    res.json({ data: series });
  } catch (error) {
    res.status(error.response.status).json({
      data: { message: error.response.data.Error }
    });
  }
});

app.post("/show/save", (req, res) => {
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
});

app.get("/shows", (req, res) => {
  MongoClient.connect(
    MONGODB_URI,
    (error, db) => {
      try {
        if (error) throw error;
        db.collection("subscriptions")
          .find({})
          .toArray((error, result) => {
            if (error) throw error;
            res.json({ data: result });
          });
      } catch (error) {
        res.json();
      }
    }
  );
});

app.get("/shows/:day", (req, res) => {
  MongoClient.connect(
    MONGODB_URI,
    (error, db) => {
      try {
        if (error) throw error;
        db.collection("subscriptions")
          .find({
            airsDayOfWeek: req.params.day
          })
          .toArray((error, result) => {
            if (error) throw error;
            res.json({ data: result });
          });
      } catch (error) {
        res.json();
      }
    }
  );
});

app.delete("/show", (req, res) => {
  let show = req.body;
  // console.log(show);
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
});

app.use(express.static(path.join(__dirname, "/dist")));

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}
else {
  app.listen(port);
}
