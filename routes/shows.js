const router = require('express').Router();

const controllers = require('../controllers/showsController')

router.get("/", controllers.getShows);

router.get("/:day", controllers.getShowsByDay);

module.exports = router;