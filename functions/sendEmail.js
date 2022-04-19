"use strict";

const { receiveMessageSQS } = require("../services/receiveMessageSQS");
const { deleteMessageSQS } = require("../services/deleteMessageSQS");
const { sendEmail } = require("../services/sendEmail");
const { httpResponse } = require("../utils/format/httpResponse");

module.exports.handler = async (event) => {
  try {
    const results = await receiveMessageSQS();

    if (results.Messages && results.Messages.length) {
      for (const message of results.Messages) {
        const body = JSON.parse(message.Body);
        await sendEmail(body);
        await deleteMessageSQS(message.ReceiptHandle);
      }
    }

    return httpResponse(204);
  } catch (error) {
    return httpResponse(error.status || 500, {
      error: error.message,
    });
  }
};
