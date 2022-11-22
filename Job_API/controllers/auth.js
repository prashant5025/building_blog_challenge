const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

// @dec register user
const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

// @dec login user and get token
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // throw new BadRequestError("Please provide email and password");
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please provide email and password" });
  }

  const user = await User.findOne({email});

  if (!user) {
    res.status(StatusCodes.UNAUTHORIZED).json("Invalid credentials");
  }
//compare password
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    res.status(StatusCodes.UNAUTHORIZED).json("Invalid credentials");
  }


  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
