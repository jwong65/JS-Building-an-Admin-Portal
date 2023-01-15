const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res)=>{
    res.send('Testing')
})

app.use(express.json())

app.listen(process.env.PORT)