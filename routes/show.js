const router = require('express').Router();

const controllers = require('../controllers/showController');

router.get("/", controllers.getShows);

router.get("/:day", controllers.getShowsByDay);

router.post("/search", controllers.postShowSearch);

router.post("/save", controllers.postShowSave);

router.delete("/", controllers.deleteShow);

module.exports = router;