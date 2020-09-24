const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Setup cors and express
app.use(cors());
app.use(express.json());

// Import routes
const status = require('../routes/api/status');
const sensor = require('../routes/api/sensor');

// Use routes
app.use('/api/status', status);
app.use('/api/sensor', sensor);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Backend started on port ${port}`));