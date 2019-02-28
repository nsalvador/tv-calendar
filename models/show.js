const axios = require("axios");
const getPosterKey = require('../util');

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  region: "us-east-2"
});
const s3 = new AWS.S3();

axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = class Show {
  constructor(show) {
    this._id = show.id.toString();
    this.seriesName = show.seriesName;
    this.posterKey = show.posterKey;
  }

  static get(show) {
    return new Promise(async (resolve, reject) => {
      let [response, series, summary] = [3].fill(null);
      try {
        response = await axios.post('/login', {
          "apikey": process.env.API_KEY,
          "username": process.env.USER_NAME,
          "userkey": process.env.USER_KEY
        });
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        response = await axios.get(`/series/${show._id}`);
        series = response.data.data;
        response = await axios.get(`/series/${show._id}/episodes/summary`);
        summary = response.data.data;
        s3.getSignedUrl('getObject', {
          Bucket: 'tv-calendar-assets',
          Key: show.posterKey
        }, (error, data) => {
          if (error) throw error;
          resolve({
            ...show,
            status: series.status,
            overview: series.overview,
            airsDayOfWeek: series.airsDayOfWeek,
            airedSeasons: summary.airedSeasons,
            airedEpisodes: summary.airedEpisodes,
            posterUrl: data
          });
        });
      }
      catch (error) {
        reject(error);
      }
    });
  }

  static search(title) {
    return new Promise(async (resolve, reject) => {
      let [response, series] = [2].fill(null);
      try {
        response = await axios.post("/login", {
          "apikey": process.env.API_KEY,
          "username": process.env.USER_NAME,
          "userkey": process.env.USER_KEY
        });
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        response = await axios.get("/search/series", {
          params: { name: title }
        });
        series = response.data.data;
        for (let item of series) {
          item.posterKey = await getPosterKey(item.id.toString());
        }
        resolve(series);
      }
      catch (error) {
        reject(error);
      }
    });
  }
};