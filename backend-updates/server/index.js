const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ groupId: 'sensor1' });
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
        console.log(params);
        insertPrediction(params);
      }
    });
}
try {
    consume()
}
catch (err) {
    console.log(err)
    console.log()
}