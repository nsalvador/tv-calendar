const router = require('express').Router();

const controllers = require('../controllers/showController');

router.post("/search", controllers.postShowSearch);

module.exports = router;