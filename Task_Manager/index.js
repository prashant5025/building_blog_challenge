const express = require('express');
const app = express();
const dotenv = require('dotenv');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

require('dotenv').config();

app.use(express.json());

app.use('/api/v1/tasks', tasks);



const PORT = process.env.PORT || 8080;
const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
    }catch(err){
        console.log(err)
    }
}

start();
