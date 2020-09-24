const router = require('express').Router()

// backend:5000/api/status
router.get('/', (req, res) => {
    console.log('GET /api/status');
    res.status(200).send('Connected to Backend!');
});

module.exports = router;