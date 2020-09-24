const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB database
const mongoose = require('mongoose');
const mongoUrl = 'mongodb://mongo:27017/auth_db';
mongoose.connect(mongoUrl, {useNewUrlParser: true}).then(() => console.log('MongoDB Connected'));

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend-auth listening on port ${PORT}`);
});