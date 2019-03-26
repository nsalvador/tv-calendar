const Show = require('../models/show');

module.exports = {
  postShowSearch: async (req, res) => {
    try {
      let show = req.body.show;
      let response = await Show.search(show);
      res.json({
        data: response
      });
    }
    catch (error) {
      res.status(error.response.status).json({
        data: {
          message: error.response.data.Error
        }
      });
    }
  }
};