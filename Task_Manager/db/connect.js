const mongoose = require('mongoose')
const url = "mongodb+srv://prashant:1234@cluster0.gtmddw0.mongodb.net/Task?retryWrites=true&w=majority"



const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected')
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB