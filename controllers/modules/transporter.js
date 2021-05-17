const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  service: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.KEVIN_MAIL,
    pass: "123456789",
  },
//   tls: {
//     ciphers: "SSLv3",
//   },
  requireTLS: false
});
