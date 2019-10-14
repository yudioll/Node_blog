const express = require('express')
const path = require('path')
const route = require('../routes/router')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, '../dist')))

app.use(route)

app.listen(3000)


