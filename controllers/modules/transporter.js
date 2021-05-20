const nodemailer = require("nodemailer"),
inlineCss = require("nodemailer-juice");


transporter.use("compile", inlineCss());

exports.transporter = nodemailer.createTransport({
  service: "Godaddy",
  host: "smtp.office365.com",
  port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.KEVIN_MAIL,
    pass: process.env.KEVIN_PW,
  },
  tls: {
    ciphers: "SSLv3",
  },
});
