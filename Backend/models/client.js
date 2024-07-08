const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  nameClient: {
    type: String,
    required: true
  },
  surnameClient: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  emailClient: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Client', ClientSchema);