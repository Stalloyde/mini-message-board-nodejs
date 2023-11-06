const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema =  new Schema({
    index: Number,
    text: String,
    user: String,
    added: Date,
})

module.exports = mongoose.model('Message', messageSchema)