// model
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Customer', customerSchema);
