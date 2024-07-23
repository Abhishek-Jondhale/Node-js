// router/customer.js
const express = require('express');
const router = express.Router();
const customerService = require('../service/customerService');

// Create a new customer router
router.post('/add', async (req, res) => {
  try {
    const newCustomer = await customerService.createCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' });
  }
});



module.exports = router;
