const nodemailer = require("nodemailer");

function formatMessage(data) {
  const formatDate = data.date.replace(" ", " at ");
  return `
  <html>
  <head>
  </head>
  <body style="font-size: 18px;color: #4b4b4b;font-family: monospace;display: flex;align-items: center;justify-content: center;flex-direction: column;">
    <p>Thank you by signup in event and here below  it is your ticket:</p>
    <div style="width: 450px;padding: 20px;background: #eae8e8;border-radius: 8px 50px 50px;">
      <h1 style="text-align: center;">Ticket ${data.id}🎫</h1>
      <p style="border-bottom: 2px dashed #BD3D3D;"><strong>Name: </strong>${data.name}</p>
      <p style="border-bottom: 2px dashed #BD3D3D;"><strong>Event: </strong>${data.title}</p>
      <p style="border-bottom: 2px dashed #BD3D3D;"><strong>Date: </strong>${formatDate}</p>
      <p style="border-bottom: 2px dashed #BD3D3D;"><strong>Address: </strong>${data.address}</p>
    </div>
  </body>
</html>
`;
}

module.exports.sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const formatMessageTicket = formatMessage(data);

  return await transporter.sendMail({
    from: '"Event Code" <code@event.com>',
    to: data.email,
    subject: "Event Code your ticket",
    html: formatMessageTicket,
  });
};
