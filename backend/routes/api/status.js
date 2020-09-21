const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('GET /api/status');
    res.status(200).send('Connected to Backend!');
});

module.exports = router;