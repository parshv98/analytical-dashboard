const express = require('express');
const router = express.Router();

// Get KPI numbers
router.get('/metrics', (req, res) => {
    res.json({
        success: true,
        data: {
            totalUsers: 1542,
            activeUsers: 892,
            totalRevenue: 450230.50,
            totalTransactions: 3421
        }
    });
});

// Get chart data
router.get('/chart-data', (req, res) => {
    res.json({
        success: true,
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
                { label: 'Revenue', data: [12000, 19000, 3000, 5000, 2000] }
            ]
        }
    });
});

// Get dashboard summary
router.get('/summary', (req, res) => {
    res.json({
        success: true,
        data: {
            status: "Healthy",
            serverLoad: "32%",
            lastUpdate: new Date().toISOString()
        }
    });
});

module.exports = router;
