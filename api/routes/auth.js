const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        if (req.body.username === "" || req.body.password === "") {
            res.status(400).json("Please fill in all fields");
        } else {
            const user = await User.findOne({ username: req.body.username });

            // if no user
            !user && res.status(401).json("Wrong credentials");

            // if same user then compare password
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            !validPassword && res.status(400).json("Wrong credentials");

            // if all good then res
            res.status(200).json(user);
        }
    } catch (err) {
        res.status(500).json(err);

    }
});

module.exports = router;
