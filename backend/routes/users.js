const express = require('express');
const router = express.Router();

const mockUser = {
    id: 1,
    email: "user@example.com",
    name: "John Doe",
    role: "admin"
};

// List users (admin)
router.get('/', (req, res) => {
    res.json({ success: true, data: [mockUser] });
});

// Get current user profile
router.get('/profile', (req, res) => {
    res.json({ success: true, data: mockUser });
});

// Update current user
router.put('/profile', (req, res) => {
    res.json({ success: true, message: "Profile updated successfully" });
});

// Get user by ID (admin)
router.get('/:id', (req, res) => {
    res.json({ success: true, data: { ...mockUser, id: parseInt(req.params.id) } });
});

// Update user (admin)
router.put('/:id', (req, res) => {
    res.json({ success: true, message: `User ${req.params.id} updated successfully` });
});

// Delete user (admin)
router.delete('/:id', (req, res) => {
    res.json({ success: true, message: `User ${req.params.id} deleted successfully` });
});

module.exports = router;
