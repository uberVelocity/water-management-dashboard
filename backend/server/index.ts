import express = require('express');
import cors = require('cors');
import bodyParser = require('body-parser');
import http = require('http');

const app = express();
const server = http.createServer(app);

// Setup bodyparser
app.use(bodyParser.json());

// Setup cors and express
app.use(cors());
app.use(express.json());

// Import routes
import { status } from '../routes/api/status';
// import sensor = require('../routes/api/sensor');

// Use routes
app.use('/api/status', status);
// app.use('/api/sensor', sensor);

const port = process.env.PORT || 5001;

// Start listening for requests
server.listen(port);