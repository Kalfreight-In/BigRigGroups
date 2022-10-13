const router = require('express').Router();
const emailMessageController = require('../Controller/emailMessageController');

router.post('/', emailMessageController.sendingMessages);

module.exports = router;
