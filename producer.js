const Kafka = require('kafkajs').Kafka

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'my-topic',
    messages: [
      { value: 'Hello KafkaJS producer!' },
    ],
  })

  await producer.disconnect()
}

run().catch(console.error)
