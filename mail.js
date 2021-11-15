const nodemailer = require("nodemailer");
const mail = async (to, subject, message) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ewower12@gmail.com",
      pass: "muhamet12",
    },
  });
  let result = await transporter.sendMail({
    from: "info@Inevstition",
    to: to,
    subject: subject,
    text: message,
  });
};

module.exports = mail;
