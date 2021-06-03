const nodemailer = require("nodemailer"),
  sgTransport = require("nodemailer-sendgrid-transport");

exports.transporter = nodemailer.createTransport({
  service: "SendGrid",
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  // service: "Godaddy",
  // host: "smtp.office365.com",
  // port: process.env.SMTP_PORT,
  //secure: false,
  //requireTLS: true,
  // auth: {
  //   user: process.env.ALEXANDER_MAIL,
  //   pass: process.env.ALEXANDER_PW,
  // },
  // tls: {
  //   ciphers: "SSLv3",
  // },
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
});
