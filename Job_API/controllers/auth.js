const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors");
const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");


// @dec register user 
const register = async (req, res) => {
  const { name, email, role, password } = req.body;
  if (!name || !email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({msg:"Please provide name, email and password"});
  }
  const user = await User.create({ name, email, role, password });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(StatusCodes.CREATED).json({ user, token });
};

// @dec login user and get token
const login = async (req, res) => {
  const { email, password } = req.body;
  if(!email && !password){
      throw new BadRequest("Please provide email and password");
  }
  const user = await User.findOne({
    email,password
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(StatusCodes.CREATED).json({ user, token });

};

module.exports = {
  register,
  login,
};
