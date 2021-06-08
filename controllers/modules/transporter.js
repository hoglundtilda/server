const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  // service: "SendGrid",
  // host: "smtp.sendgrid.net",
  // port: 465,
   service: "outlook.office365.com",
   host: "outlook.office365.com",
   port: 993,
  secure: true,
 // requireTLS: true,
  auth: {
    user: process.env.KEVIN_MAIL,
    pass: process.env.KEVIN_PW,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});
