const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  // service: "SendGrid",
  // host: "smtp.sendgrid.net",
  // port: 465,
   service: "smtp.office365.com",
   host: "smtp.office365.com",
   port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.KEVIN_MAIL,
    pass: process.env.KEVIN_PW,
  },
});
