const router = require('express').Router();

const controllers = require('../controllers/subscriptionsController');

router.get('/:value', controllers.getSubscriptions);

router.delete('/', controllers.removeShowFromSubscriptions);

router.post('/', controllers.addShowToSubscriptions);

module.exports = router;