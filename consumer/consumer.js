const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092']
})
// Cassandra variables
const localDatacenter = 'datacenter1';
const cassandra = require('cassandra-driver');
const contactPoints = ['cassandra', 'cassandra', 'cassandra'];
const loadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy(localDatacenter);
const clientOptions = {
  policies: {
      loadBalancing: loadBalancingPolicy
  },
  contactPoints: contactPoints,
  authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
  keyspace: 'sensors'
}

const consumer = kafka.consumer({ groupId: 'sensor1' });



const insertResultQuery = 'INSERT INTO sensor1(ts, pressure, temperature) VALUES(?, ?, ?)';

async function insertPrediction(data) {
  console.log(`data: ${data}`);
  // Commit data to Cassandra DB
  cassandraClient = new cassandra.Client(clientOptions);

  console.log(`attempting to insert ${data} using ${insertResultQuery}`);
  cassandraClient.execute(insertResultQuery, data, {prepare: true}, (err) => {
      if(err) {
          console.log(err);
      }
  });
}


async function consume(){
  await consumer.connect()  
  await consumer.subscribe({ topic: 'sensor1', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({topic, partition, message}) => {
      console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
      });
      const data = JSON.parse(JSON.parse(message.value));
            
      const ts = Object.keys(data.pressure)[0];
      const pressure = data["pressure"][ts];
      const temperature = data["temperature"][ts];
      const params = [ts,pressure, temperature];
      console.log(params)
      insertPrediction(params);
    }
  });
}

consume()






