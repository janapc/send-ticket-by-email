"use strict";

const { validateEmail } = require("../utils/validation");
const users = require("../utils/mockUsers.json");
const { httpResponse } = require("../utils/format/httpResponse");
const { sendMessageSQS } = require("../services/sendMessageSQS");

module.exports.handler = async (event) => {
  try {
    const { email } = event.queryStringParameters;

    if (validateEmail(email)) {
      const user = users.data.find(
        (user) => user.email === email && user.ticket && user.ticket.status
      );
      if (!user) return httpResponse(404, { error: "The user is not found" });

      const message = {
        id: user.ticket.number,
        title: user.ticket.title,
        address: user.ticket.address,
        email: user.email,
        name: user.name,
        date: new Date(user.ticket.date).toLocaleString("pt-BR"),
      };

      const result = await sendMessageSQS(message);

      return httpResponse(200, { messageId: result.MessageId });
    }
  } catch (error) {
    return httpResponse(error.status, {
      error: error.message,
    });
  }
};
