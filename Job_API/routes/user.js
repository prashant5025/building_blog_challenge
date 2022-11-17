const express = require('express');
const router = express.Router();
const {userPostMethod,getAllUsers} = require('../controllers/main');


router.post('/',userPostMethod).get('/', getAllUsers)

module.exports = router;