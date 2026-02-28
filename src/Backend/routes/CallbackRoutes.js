const express = require('express');
const router = express.Router();
const { handleCallbackRequest } = require('../controller/CallbackController');

// Define your callback route here
router.post('/callback', handleCallbackRequest);

 


module.exports = router;