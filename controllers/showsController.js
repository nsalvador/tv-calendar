const MongoClient = require("mongodb").MongoClient;

const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  getShows: (req, res) => {
    MongoClient.connect(
      MONGODB_URI,
      (error, db) => {
        try {
          if (error) throw error;
          db.collection("subscriptions")
            .find({})
            .sort({ seriesName: 1 })
            .toArray((error, result) => {
              if (error) throw error;
              res.json({ data: result });
            });
        } catch (error) {
          res.json();
        }
      }
    );
  },
  getShowsByDay: (req, res) => {
    MongoClient.connect(
      MONGODB_URI,
      (error, db) => {
        try {
          if (error) throw error;
          db.collection("subscriptions")
            .find({
              airsDayOfWeek: req.params.day
            })
            .sort({ seriesName: 1 })
            .toArray((error, result) => {
              if (error) throw error;
              res.json({ data: result });
            });
        } catch (error) {
          res.json();
        }
      }
    );
  }
};