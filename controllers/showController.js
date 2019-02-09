const Show = require('../models/show');

module.exports = {
  getShows: async (req, res) => {
    try {
      let response = await Show.getShows();
      res.json({
        data: response
      });
    }
    catch (error) {
      res.json();
    }
  },

  getShowsByDay: async (req, res) => {
    try {
      let day = req.params.day;
      let response = await Show.getShowsByDay(day);
      res.json({
        data: response
      });
    }
    catch (error) {
      res.json();
    }
  },

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