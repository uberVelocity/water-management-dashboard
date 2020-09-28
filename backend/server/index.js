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

const port = process.env.PORT || 5000;

// Start listening for requests
server.listen(port, () => console.log(`Backend started on port ${port}`));

const io = require('socket.io')(server);
const connections = [];

// Listen for socket connections
io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log(`a user has connected: ${connections.length} connected`);
    setInterval(() => {
        console.log('generating data...');
        let value = Math.random();
        console.log(`value: ${value}`);
        socket.emit('temperature', value);
        console.log('emitted to temperature');
    }, 3000)
});

io.sockets.on('disconnect', (socket) => {
    connections.splice(connections.indexOf(socket, 1));
    console.log(`a user has disconnected: ${connections.length} connected`);
});