const express = require('express');
const app = express();
const dotenv = require('dotenv');


app.get('/',(req, res) => {
    try{
        res.status(200).send('<h1>Server is running</h1>');
    }catch(err){
        res.status(500).send(err);
    }
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    try{
        console.log(`Server running on port ${PORT}`);

    }catch(err){
        res.status(500).send({error: err});
    }
})