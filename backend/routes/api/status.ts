import express = require('express');
const status = express.Router();

// backend:5000/api/status
status.get('/', (req, res) => {
    res.status(200).send('Connected to Backend!');
});

export { status }