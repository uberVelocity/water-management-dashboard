const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'backend-live-socket',
  brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ groupId: 'live_update' });

//#################

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

app.get('/api', (req, res) => {
    console.log('received GET request from FRONTEND through NGINX');
    res.status(200).json({
        message: 'hello'
    });
});

async () => {

}

// Start listening for requests
server.listen(port, () => console.log(`Backend started on port ${port}`));

const io = require('socket.io')(server);
let connections = [];

function pushToSocket(data) {
    for (connection of connections) {
        connection.emit("pressure", data)
    }
}

async function runConsumer() {
    // Connect to Kafka
    await consumer.connect()
    await consumer.subscribe({ topic: 'sensor_data', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value.toString(),
            });
            const data = JSON.parse(message.value.toString());
            const type = data["type"];
            
            console.log(`emitting to ${type}`)
    
            if (type == "pressure") {
                // console.log('emitting to pressure using socket.broadcast.emit()')
                // socket.broadcast.emit("pressure", data)
                // console.log('emitting to pressure using io.sockets.emit()')
                // io.sockets.emit("pressure", data)
                pushToSocket(data)
                // socket.emit("pressure", data)
            } 
            else if (type == "leakage") {
                socket.broadcast.emit("leakage", data)
            } 
            else if (type == "quality") {
                socket.broadcast.emit("quality", data)
            }
        }
    });
}

runConsumer()

// Listen for socket connections
io.of('/socket.io/').on('connection', async (socket) => {
    // Push connection to client on connections stack
    connections.push(socket);
    console.log(`a user has connected: ${connections.length} connected`);
});

io.sockets.on('disconnect', (socket) => {
    connections.splice(connections.indexOf(socket, 1));
    console.log(`a user has disconnected: ${connections.length} connected`);
});
