require('dotenv').config()

const express = require('express')
const app = express()


//async errors


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})