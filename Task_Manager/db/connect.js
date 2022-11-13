const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionString = process.env.MONGODB_URI;

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
