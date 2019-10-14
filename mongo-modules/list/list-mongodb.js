const mongoose = require('mongoose')

// 拿到数据结构构造函数
const Schema = mongoose.Schema

// 链接mongodb
mongoose.connect('mongodb://localhost/myblog')

const List = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default: new Date()
    }
})

module.exports = mongoose.model('Lists', List)



