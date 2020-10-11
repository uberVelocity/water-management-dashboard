const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ groupId: 'sensor_data' });

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


const port = process.env.PORT || 5001;

// Start listening for requests
server.listen(port, () => console.log(`Backend started on port ${port}`));

const io = require('socket.io')(server);
const connections = [];

// Listen for socket connections
io.sockets.on('connection', async (socket) => {
    // Push connection to client on connections stack
    connections.push(socket);
    console.log(`a user has connected: ${connections.length} connected`);

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
                socket.emit("pressure", data)
            } 
            else if (type == "leakage") {
                socket.emit("leakage", data)
            } 
            else if (type == "quality") {
                socket.emit("quality", data)
            }
        }
    });
});

io.sockets.on('disconnect', (socket) => {
    connections.splice(connections.indexOf(socket, 1));
    console.log(`a user has disconnected: ${connections.length} connected`);
});

