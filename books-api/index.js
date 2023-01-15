const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res)=>{
    res.send('Testing')
})

app.use(express.json())

app.use('/books', require('./controllers/books_controller'))

app.listen(process.env.PORT)