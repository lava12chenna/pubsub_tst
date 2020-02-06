/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
require('dotenv').config();
 const topicName = 'Simple_Msg'; 
 const data = JSON.stringify({foo: 'bar'});

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage() {
  /**
   * TODO(developer): Uncomment the following lines to run the sample.
   */
   const topicName = 'Simple_Msg';

  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
}

publishMessage().catch(console.error);