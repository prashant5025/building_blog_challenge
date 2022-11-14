require('dotenv').config()
require('express-async-errors');

const express = require('express')
const app = express()
//async errors
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');

//middleware
app.use(express.json());

//routes

app.get('/',(req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`)
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productsRouter);



//error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 8080;


const start = async () => {
    try{
        //connect to db
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }catch(err){
        console.log(err);
    }
}

start();