const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'consumerdb',
  brokers: ['kafka:9092']
})

// Cassandra variables
const localDatacenter = 'datacenter1';
const cassandra = require('cassandra-driver');
const contactPoints = ['cassandra_1'];
const loadBalancingPolicy = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy(localDatacenter);
const clientOptions = {
  policies: {
      loadBalancing: loadBalancingPolicy
  },
  contactPoints: contactPoints,
  authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
  keyspace: 'sensors'
}

const consumer = kafka.consumer({ groupId: 'sensor_data' });


//Queries
const insertPressureQuery = 'INSERT INTO ptSensor(id,ts,location, pressure, temperature) VALUES(?,?, ?, ?, ?)';
const insertLeakageQuery = 'INSERT INTO leakage(id,ts,location, leakage) VALUES(?,?, ?, ?)';
const insertQualityQuery = 'INSERT INTO quality(id,ts,location, quality) VALUES(?,?, ?, ?)';


async function insertData(query,data) {
  console.log(`data: ${data}`);
  // Commit data to Cassandra DB
  cassandraClient = new cassandra.Client(clientOptions);
  switch(query) {
    case 'pressure':
        query = insertPressureQuery;
        break;
    case 'leakage':
        query = insertLeakageQuery;
        break;
    case 'quality':
        query = insertQualityQuery;
        break;
    default:
        console.log(`Invalid query = ${query}.`);        
    }
    console.log(`attempting to insert ${data} using ${query}`);
    cassandraClient.execute(query, data, {prepare: true}, (err) => {
        if(err) {
            console.log(err);
        }
    });
  
}

async function consume(){
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
      
      let params
      let query
      const id = data["id"];
      const timestamp = data["timestamp"];
      const type = data["type"];
      const variables = data["variables"];
      const location = data["location"]
      console.log("Type = ",type)
      if (type == "pressure"){
        const temperature = variables["temperature"]
        const pressure = variables["pressure"]
        params = [id,timestamp,location,pressure,temperature]
        query = "pressure"
      }else if (type == "leakage"){
        const leakage = variables["leakage"]
        params = [id,timestamp,location,leakage]
        query = "leakage"
      }else if (type == "quality"){
        const quality = variables["quality"]
        params = [id,timestamp,location,quality]
        query = "quality"
      }
      
      
      console.log("Trying to insert data into cassandra")
      insertData(query,params)
            
      // const ts = Object.keys(data.pressure)[0];
      // const pressure = data["pressure"][ts];
      // const temperature = data["temperature"][ts];
      // const params = [ts,pressure, temperature];
      // console.log(params)
      // insertPrediction(params);
    }
  });
}

consume()






