const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  phone: {
    type: String,
    required: true,
    match: [/^\+?\d{10,15}$/, 'Please fill a valid phone number']
  },
  password: {
    type: String,
    required: true
    // Note: Store a hashed password, not plain text
  },
  role: {
    type: String,
    enum: ['passenger', 'driver'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const UserModel = mongoose.model('Users', userSchema);
module.exports = UserModel;