const mongoose = require('mongoose');


const connectDB = async (url) => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    .then(() => console.log('MongoDB connected...'))
}

module.exports = connectDB;