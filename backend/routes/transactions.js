const express = require('express');
const router = express.Router();

const mockData = [
    {
        id: 1,
        type: "income",
        amount: 5000,
        description: "Client Payment",
        date: "2024-01-10"
    },
    {
        id: 2,
        type: "expense",
        amount: 150,
        description: "Software Subscription",
        date: "2024-01-12"
    }
];

// List all transactions
router.get('/', (req, res) => {
    res.json({
        success: true,
        data: mockData
    });
});

// Create transaction
router.post('/', (req, res) => {
    const newTx = { ...req.body, id: 3, date: new Date().toISOString().split('T')[0] };
    res.json({ success: true, data: newTx });
});

// Get single transaction
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tx = mockData.find(t => t.id === id) || mockData[0];
    res.json({ success: true, data: tx });
});

// Update transaction
router.put('/:id', (req, res) => {
    res.json({ success: true, message: `Transaction ${req.params.id} updated successfully` });
});

// Delete transaction
router.delete('/:id', (req, res) => {
    res.json({ success: true, message: `Transaction ${req.params.id} deleted successfully` });
});

module.exports = router;
