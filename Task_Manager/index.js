const express = require('express');
const app = express();
const dotenv = require('dotenv');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

require('dotenv').config();

app.use(express.json());

app.use('/api/v1/tasks', tasks);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    try{
        console.log(`Server running on port ${PORT}...`);
        connectDB();
    }catch(err){
        res.status(500).send({error: err});
    }
})