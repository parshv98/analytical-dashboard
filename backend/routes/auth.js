const express = require('express');
const router = express.Router();

// User Registration
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Name, email and password are required.' });
    }

    // In a real app you would hash password and save to DB here.
    // For now, echo back the supplied name/email in the response.
    res.json({
        success: true,
        message: 'User registered successfully',
        token: 'jwt_token_placeholder',
        user: {
            id: Date.now(),
            email: email,
            name: name
        }
    });
});

// User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    // In a real app you would verify credentials here.
    // Derive a display name from the email prefix as a sensible fallback.
    const derivedName = email.split('@')[0];

    res.json({
        success: true,
        token: 'jwt_token_placeholder',
        user: {
            id: 1,
            email: email,
            name: derivedName
        }
    });
});

// User Logout
router.post('/logout', (req, res) => {
    res.json({ success: true, message: 'User logged out successfully' });
});

module.exports = router;
