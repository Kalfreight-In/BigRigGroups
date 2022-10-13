const router = require('express').Router();
const subscribeController = require('../Controller/subscribeController');

router.post('/', subscribeController.subscribe);

module.exports = router;
