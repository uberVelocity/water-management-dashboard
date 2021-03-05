import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import auth from '../routes/api/auth';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB database
const mongoUrl = process.env.MONGO_LOCAL_DOCKER_SINGLE;
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true}).catch(error => {
    console.log(error)
});
mongoose.connection.on('error', err => {
    console.log(err);
});

// Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const corsOptions = {
    exposedHeaders: 'Authorization',
};
app.use(cors(corsOptions));
app.use(express.json());

// Use routes
app.use('/api/auth', auth);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend-auth listening on port ${PORT}`);
});