const express = require('express');
const { register, login, getAllUsers } = require('../controllers/authController');
const { body, validationResult } = require('express-validator');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

// Registration route
router.post('/register', [
    body('username').isLength({ min: 3 }).withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'), // Change here
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    register(req, res);
  });
// Login route
router.post('/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  login(req, res);
});

// Get all users route
router.get('/users', authenticate, getAllUsers);

module.exports = router;
