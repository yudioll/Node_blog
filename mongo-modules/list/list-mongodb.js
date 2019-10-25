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
    },
    imageUrl: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    articalType: {
        type: String,
        default: 'node'
    }
})

module.exports = mongoose.model('Lists', List)



