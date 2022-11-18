require('dotenv').config();
//packages
const express = require('express');
const app = express();

//Routers
const jobsRouter = require('./routes/job');
const usersRouter = require('./routes/user');


//Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');

app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/jobs', jobsRouter);

//Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//local port
const PORT = process.env.PORT || 8080;

//start server
const start = async () => {
    try{
        //db connection
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`);
        })

    }catch(err){
        console.log(err);
    }
}

start();