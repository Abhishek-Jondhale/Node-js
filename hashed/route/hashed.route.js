// auth.route.js
const express = require('express');
const AuthService = require('../service/hashed.service');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await AuthService.registerUser(username, email, password);
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'User registered successfully',
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({
      status: 'failed',
      code: 500,
      message: 'Registration failed',
    });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await AuthService.loginUser(username, password);

    if (!user) {
      res.status(401).json({
        status: 'failed',
        code: 401,
        message: 'Authentication failed',
      });
    } else {
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Login successful',
        user,
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      status: 'failed',
      code: 500,
      message: 'Login failed',
    });
  }
});

module.exports = router;
