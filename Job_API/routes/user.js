const express = require('express');
const router = express.Router();
const userPostMethod = require('../controllers/main');


router.post('/',userPostMethod);

module.exports = router;