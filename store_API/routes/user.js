const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');


router.get('/', async (req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json({users});
    }catch(err){
        res.status(500).json({msg: err.message});
    }
});

router.post('/', async(req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({user});

    }catch(err){
        res.status(500).json({msg: err.message});
    }
})

module.exports = router;




