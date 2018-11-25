const mongoose = require('mongoose')

const { Schema } = mongoose
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  jwtToken: {
    type: String,
  },
  googleToken: {
    type: String,
  },
  facebookToken: {
    type: String,
  },
})

UserSchema.statics.findPassword = function findPassword(email, cb) {
  return this.findOne({ email }).exec(cb)
}

const User = mongoose.model('user', UserSchema)

module.exports = User
