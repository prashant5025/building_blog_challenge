
const User = require('../models/user');

const userPostMethod = async (req, res) => {
    try{
        const name = req.body.name;
        console.log(name);
        const user = await User.create({name});
        res.status(201).json({success: true, data: user});
    }catch(err){
        res.status(400).json({success: false, msg: err.message});
    }
}

module.exports = userPostMethod;