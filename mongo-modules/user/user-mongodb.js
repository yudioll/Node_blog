const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/myblog')

const User = new Schema({
    username: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Users", User)
