// service/customerService.js

const Customer = require('../model/customerModel');
const mongoose = require('mongoose');

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function createCustomer(customerData) {
  try {
    const customer = new Customer(customerData);
    return await customer.save();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCustomer,
 
};
