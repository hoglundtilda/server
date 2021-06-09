const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secureConnection: true,
  auth: {
    user: process.env.USER,
    pass: process.env.SMTPRELAY,
  },
});
