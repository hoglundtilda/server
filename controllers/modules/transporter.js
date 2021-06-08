const nodemailer = require("nodemailer");

// exports.transporter = nodemailer.createTransport({
//   // service: "SendGrid",
//   // host: "smtp.sendgrid.net",
//   // port: 465,
//   //service: "outlook.office365.com",
//   host: "smtp.office365.com",
//   port: 587,
//   secureConnection: false,
//   // requireTLS: true,
//   tls: {
//     // do not fail on invalid certs
//     rejectUnauthorized: false,
//     ciphers: "SSLv3",
//   },
//   auth: {
//     user: process.env.KEVIN_MAIL,
//     pass: process.env.KEVIN_PW,
//   },
// });

exports.transporter = nodemailer.createTransport({
  // service: "SendGrid",
  // host: "smtp.sendgrid.net",
  //service: 'Godaddy',
  host: "smtp.office365.com",
  port: 587,
  secureConnection: true,
  // requireTLS: true,
  // tls: {
  //   // do not fail on invalid certs
  //   rejectUnauthorized: false,
  //   ciphers: "SSLv3",
  // },
  auth: {
    user: process.env.KEVIN_MAIL,
    pass: process.env.KEVIN_PW,
  },
});
