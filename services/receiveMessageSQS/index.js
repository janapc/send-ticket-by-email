const AWS = require("aws-sdk");

module.exports.receiveMessageSQS = async () => {
  AWS.config.update({ region: process.env.AWS_REGION });

  const sqs = new AWS.SQS();

  return await sqs
    .receiveMessage({
      QueueUrl: process.env.AWS_QUEUE_URL,
      MaxNumberOfMessages: 10,
    })
    .promise();
};
