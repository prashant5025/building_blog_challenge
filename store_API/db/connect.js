const mongoose = require('mongoose');


const connectDB = async (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected...');
}

module.exports = connectDB;