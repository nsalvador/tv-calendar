const Show = require('../models/show');

module.exports = {
  deleteShow: async (req, res) => {
    try {
      let show = new Show(req.body);
      await show.delete();
      res.json();
    }
    catch (error) {
      res.json();
    }
  },

  postShowSave: async (req, res) => {
    try {
      let show = new Show(req.body);
      await show.save();
      res.json();
    }
    catch (error) {
      res.json();
    }
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