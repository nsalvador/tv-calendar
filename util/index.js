const axios = require("axios");

const API_KEY = process.env.API_KEY;

module.exports = {
  getDayOfWeek: (item) => {
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
  },
  getSource: (item) => {
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
};