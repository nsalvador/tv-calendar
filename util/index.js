const axios = require("axios");

axios.defaults.baseURL = "https://api.thetvdb.com";

module.exports = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = null, posterKey = null;
      response = await axios.post('/login', {
        "apikey": process.env.API_KEY,
        "username": process.env.USER_NAME,
        "userkey": process.env.USER_KEY
      });
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      response = await axios.get(`/series/${id}/images`);
      let count = response.data.data.poster;
      if (typeof count == 'undefined') {
        posterKey = "";
      }
      else {
        response = await axios.get(`/series/${id}/images/query`, {
          params: { keyType: "poster" }
        });
        let source = response.data.data[Math.floor(Math.random() * count + 1) - 1].fileName;
        posterKey = (source !== "") ? source.split("/")[1] : "";
      }
      resolve(posterKey);
    }
    catch (error) {
      reject({
        data: {
          message: error.response.data.Error
        },
        status: error.response.status
      });
    }
  });
}