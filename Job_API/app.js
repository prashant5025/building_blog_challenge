require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const userRoute = require('./routes/user');

app.use(express.json());
app.use('/api/v1/users', userRoute);

app.post('/',async (req,res) => {
    
})

const PORT = process.env.PORT || 3000;
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