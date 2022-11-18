require('dotenv').config();
//packages
const express = require('express');
const app = express();

//Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));
app.use(express.json());

//Routes


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