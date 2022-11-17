require('dotenv').config();

const express = require('express');
const app = express();

const students = [{
    name: 'John',
    age: 20
}, {
    name: 'Jane',
    age: 31
}]

app.get('/',(req,res) => {
    res.status(200).json({data:"success",students});
})

const PORT = process.env.PORT || 3000;
const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`);
        })
    }catch(err){
        console.log(err);
    }
}

start();