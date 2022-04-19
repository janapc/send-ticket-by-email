const HandleErrors = require("../format/HandleErrors");

module.exports.validateEmail = (email) => {
  if (typeof email !== "string" || email.length <= 0) {
    throw new HandleErrors(400, "The field have be string and bigger than 0");
  }

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!regex.test(email)) {
    throw new HandleErrors(400, "The e-mail is invalid");
  }

  return true;
};
