const AWS = require("aws-sdk");

module.exports.sendMessageSQS = (message) => {
  AWS.config.update({ region: process.env.AWS_REGION });

  const sqs = new AWS.SQS();

  return sqs
    .sendMessage({
      MessageBody: JSON.stringify(message),
      QueueUrl: `${process.env.AWS_QUEUE_URL}`,
      MessageGroupId: `${process.env.AWS_MESSAGE_GROUP}`,
    })
    .promise();
};
