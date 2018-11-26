const express = require('express')
const User = require('../../Model/User')

const router = express.Router()

/**
 * Todo: Move this api to specific service
 */
router.post('/register', (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    User.create({ email, password }, (err, user) => {
      if (err) {
        res.status(500).send({ success: false, message: err.name })
      } else {
        res.status(200).send({ success: true, user })
      }
    })
  } else {
    res.status(500).send({ success: false, message: 'email and password are' })
  }
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  if (!email || email === '') {
    res.send({
      status: 200,
    })
  } else {
    User.findPassword(email, (err, user) => {
      if (err) {
        res.status(500).send({ success: false, message: err.name })
      } else if (user && user.password === password) {
        res.status(200).send({ success: true, user })
      } else {
        res.status(400).send({ success: false, message: 'Invalid email or password' })
      }
    })
  }
})

module.exports = router
