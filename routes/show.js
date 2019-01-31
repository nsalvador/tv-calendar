const router = require('express').Router();

const controllers = require('../controllers/showController');

router.post("/search", controllers.postShowSearch);

router.post("/save", controllers.postShowSave);

router.delete("/", controllers.deleteShow);

module.exports = router;