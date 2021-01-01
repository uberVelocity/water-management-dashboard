const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'backend-updates',
  brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ groupId: 'live_update' });

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

const port = process.env.PORT || 5500;

// Start listening for requests
server.listen(port, () => console.log(`Backend started on port ${port}`));

const io = require('socket.io')(server);
console.log('printing io...');
console.log(io);

let connections = [];

function pushToSocket(data) {
    for (connection of connections) {
        connection.emit("pressure", data)
    }
}

async function runConsumer() {
    console.log('Running consumer...')
    // Connect to Kafka
    await consumer.connect()
    await consumer.subscribe({ topic: 'sensor_data', fromBeginning: true })

    await consumer.run({
        eachMessage: async ({topic, partition, message}) => {
            const data = JSON.parse(message.value.toString());
            const type = data["type"];
            
            console.log(`emitting to ${type}`)
    
            if (type == "pressure") {
                pushToSocket(data)
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
