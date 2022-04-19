const AWS = require("aws-sdk");

module.exports.deleteMessageSQS = async (receiptHandle) => {
  AWS.config.update({ region: process.env.AWS_REGION });

  const sqs = new AWS.SQS();
  await sqs
    .deleteMessage({
      QueueUrl: process.env.AWS_QUEUE_URL,
      ReceiptHandle: receiptHandle,
    })
    .promise();
};
