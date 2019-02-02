const axios = require("axios");

const util = require('../util');

const API_KEY = process.env.API_KEY;


axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = class Show {

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