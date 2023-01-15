const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
}, {toJSON:{virtuals: true}})

module.exports = mongoose.model('Book', bookSchema)