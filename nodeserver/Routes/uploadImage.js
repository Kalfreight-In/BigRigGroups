const router = require('express').Router();
const uploadController = require('../Controller/uploadController');

router.post('/pdf', uploadController.sendingResume);

module.exports = router;
