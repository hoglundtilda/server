const nodemailer = require("nodemailer");
//const nodemailerSendgrid = require("nodemailer-sendgrid-transport");

const sgMail = require('@sendgrid/mail')



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

// exports.transporter = nodemailer.createTransport({
//   // service: "SendGrid",
//   // host: "smtp.sendgrid.net",
//   service: 'Godaddy',
//   host: "office365.com",
//   port: 25,
//   secureConnection: true,
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

// exports.transporter = nodemailer.createTransport(
//   nodemailerSendgrid({
//     apiKey: process.env.SENDGRID_API_KEY,
//   })
// );
