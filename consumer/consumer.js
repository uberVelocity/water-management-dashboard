const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ groupId: 'sensor1' })

async function consume(){
  await consumer.connect()
  await consumer.subscribe({ topic: 'sensor1', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
    },
  })
}

consume()
