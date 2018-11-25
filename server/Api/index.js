const express = require('express')
const connectToDB = require('../Connection')
const User = require('../Model')

const router = express.Router()

connectToDB()

/**
 * Todo: Move this api to specific service
 */
router.post('/login', (req, res) => {
  const { email } = req.body
  if (!email || email === '') {
    res.send({
      status: 200,
    })
  } else {
    User.findPassword(email, (user) => {
      console.log(user)
    })
  }
})

module.exports = router
