const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// MongoDB
const mongoose = require('mongoose');
const mongoUrl = 'mongodb://mongo:27017/auth_db';
mongoose.connect(mongoUrl, {useNewUrlParser: true});

// - Check connection
const db = mongoose.connection;
db.once('open', _ => {
    console.log('Database connected:', url)
})
  
db.on('error', err => {
    console.error('connection error:', err)
})
// -----------------------------------

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend-auth listening on port ${PORT}`);
});