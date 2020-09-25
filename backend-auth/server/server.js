const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('../routes/api/auth');
const mongoose = require('mongoose');

const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/auth', auth);

// Connect to MongoDB database
const mongoUrl = 'mongodb://mongo:27017/auth';
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => handleError(error));
mongoose.connection.on('error', err => {
    console.log(err);
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend-auth listening on port ${PORT}`);
});