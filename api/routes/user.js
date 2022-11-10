const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../model/User");

//update user
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{

            const updateUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                {
                    new: true,// this just for return the updated user
                }
            )
            res.status(200).json(updateUser);

        }catch(err){
            res.status(500).json(err);
        }

    }else{
        res.status(401).json("You can update only your account");
    }
});

//delete user
router.delete("/:id", async(req, res) => {
    //delete all posts of user and user account
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                // await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");
                console.log(req.body.userId);
            }catch(err){
                res.status(500).json(err);
            }
        }catch(err){
            res.status(404).json("User not found");
        }
    }else{
        
        res.status(401).json("You can delete only your account....");
    }
})

//get user
router.get("/:id", async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const{password, ...other} = user._doc;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
    
})

module.exports = router;