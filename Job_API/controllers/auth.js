const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");
const User = require("../models/User");


// @dec register user 
const register = async (req, res) => {
  const { name, email, role, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequest("Please provide name, email and password");
  }
  const user = await User.create({ name, email, role, password });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(201).json({ user, token });
};

// @dec login user and get token
const login = async (req, res) => {
  res.send("Login");
};

module.exports = {
  register,
  login,
};
