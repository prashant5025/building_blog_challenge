const express = require('express');
const app = express();
const dotenv = require('dotenv');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler');

require('dotenv').config();
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use(errorHandlerMiddleware);
app.use(notFound);
//PORT
const PORT = process.env.PORT || 5000;

//LISTEN
const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
    }catch(err){
        console.log(err)
    }
}

start();
