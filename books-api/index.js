const express = require('express')
const app = express()
require('dotenv').config()

const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)



app.get('/', (req, res)=>{
    res.send('Testing')
})

app.use(express.json())

app.use('/books', require('./controllers/books_controller'))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.listen(process.env.PORT)