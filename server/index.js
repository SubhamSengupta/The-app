const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

app.use(bodyParser.json())
app.use('/api', require('./Api'))

app.listen(port, (err) => {
  if (err) {
    console.log('error ', err)
  } else {
    console.log(`listening on port ${port}`)
  }
})
