const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.use((req, res,next) => {
    const token = req.headers['x-access-token'];
    if(token){
        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {
            if(err){
                res.json({
                    status: false,
                    message: 'Failed to authenticate token.'
                });
            }else{
                req.decode = decoded;
                next();
            }
        });

    }else{
        res.json({
            status: false,
            message: 'No token provided.'
        });
    }
});

module.exports = router;

