const axios = require("axios");
const getPosterKey = require('../util');

axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = class Show {
  constructor(show) {
    this._id = show.id.toString();
    this.seriesName = show.seriesName;
    this.posterKey = show.posterKey;
    this.posterUrl = null;
    this.status = null;
    this.overview = null;
    this.airsDayOfWeek = null;
    this.airedSeasons = null;
    this.airedEpisodes = null;
  }

  get() {
    return new Promise(async (resolve, reject) => {
      let show = this;
      let [response, series, summary] = [3].fill(null);
      try {
        response = await axios.post('/login', {
          "apikey": process.env.API_KEY,
        });
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        response = await axios.get(`/series/${show._id}`);
        series = response.data.data;
        response = await axios.get(`/series/${show._id}/episodes/summary`);
        summary = response.data.data;

        show.status = series.status;
        show.overview = series.overview;
        show.airsDayOfWeek = series.airsDayOfWeek;
        show.airedSeasons = summary.airedSeasons;
        show.airedEpisodes = summary.airedEpisodes;

        resolve('Success');
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
          "apikey": process.env.API_KEY
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