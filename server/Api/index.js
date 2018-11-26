const express = require('express')
const connectToDB = require('../Connection')

const app = express()

connectToDB()

app.use('/account-service', require('./account-service'))

module.exports = app
