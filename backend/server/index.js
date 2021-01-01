const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = require('http').createServer(app);

// Setup bodyparser
app.use(bodyParser.json());

// Setup cors and express
app.use(cors());
app.use(express.json());

// Import routes
const status = require('../routes/api/status');
const sensor = require('../routes/api/sensor');

// Use routes
app.use('/api/status', status);
app.use('/api/sensor', sensor);

const port = process.env.PORT || 5001;

// Start listening for requests
server.listen(port, () => console.log(`Backend started on port ${port}`));