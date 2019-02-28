const Subscriptions = require('../models/subscriptions');
const Show = require('../models/show');

module.exports = {
  getSubscriptions: async (req, res) => {
    try {
      let value = req.params.value;
      let subscriptions = new Subscriptions();
      let response = await subscriptions.get(value);
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
  },
  removeShowFromSubscriptions: async (req, res) => {
    try {
      let show = req.body;
      let subscriptions = new Subscriptions();
      let response = await subscriptions.remove(show);
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
  },
  addShowToSubscriptions: async (req, res) => {
    try {
      let show = new Show(req.body);
      let subscriptions = new Subscriptions();
      let response = await subscriptions.add(show);
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
}