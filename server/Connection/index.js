const mongoose = require('mongoose')

function establishConnection() {
  mongoose.connect(
    'mongodb://localhost/TheApp',
    { useNewUrlParser: true }
  )
  mongoose.set('useCreateIndex', true)
  mongoose.connection
    .once('open', () => {
      console.log('connection has been established')
    })
    .on('error', (error) => {
      console.log('connection error:', error)
    })
}

module.exports = establishConnection
