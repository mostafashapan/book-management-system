const express = require('express');
const { validationResult } = require('express-validator');
const { register, login, getAllUsers } = require('../controllers/authController'); // Make sure this path is correct
const { authenticate } = require('../middleware/authMiddleware');
const { registerValidation, loginValidation } = require('../validators/authValidators');

const router = express.Router();

// Register route
router.post('/register', registerValidation, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    register(req, res);
});

// Login route
router.post('/login', loginValidation, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    login(req, res);
});

// Get all users
router.get('/', authenticate, getAllUsers); // Make sure getAllUsers is defined

module.exports = router;
