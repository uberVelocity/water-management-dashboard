// Listen for socket connections from localhost:8080
const io = require('socket.io')(8080);

io.on('connection', (socket) => {
    socket.emit('hello', 'You are connected to the socket!');

    socket.on('message', (data) => {
        console.log(data);
    });
});

module.exports = io;