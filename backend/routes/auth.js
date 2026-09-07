const express = require('express');
const router = express.Router();

// User Registration
router.post('/register', (req, res) => {
    res.json({ success: true, message: "User registered successfully" });
});

// User Login
router.post('/login', (req, res) => {
    res.json({
        success: true,
        token: "jwt_token_here",
        user: {
            id: 1,
            email: "user@example.com",
            name: "John Doe"
        }
    });
});

// User Logout
router.post('/logout', (req, res) => {
    res.json({ success: true, message: "User logged out successfully" });
});

module.exports = router;
