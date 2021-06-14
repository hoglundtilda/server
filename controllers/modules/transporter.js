const nodemailer = require("nodemailer"),
  nodemailerSendgrid = require("nodemailer-sendgrid");

exports.transporter = nodemailer.createTransport(
  nodemailerSendgrid({
    apiKey: process.env.SENDGRID_API_KEY,
  })
);
