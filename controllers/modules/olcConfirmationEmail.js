//const { transporter } = require("./transporter"),
const nodemailer = require("nodemailer"),
  handlebars = require("handlebars"),
  fs = require('fs'),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html",
  attachmentsDir = "../../templates",
  inlineCss = require("nodemailer-juice");



  const transporter = nodemailer.createTransport({
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
  transporter.use("compile", inlineCss())

exports.createContactConfirmationEmail = async (email) => {
  const attachments = path.join(__dirname, attachmentsDir) 

  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = {
      firstName: 'Matilda',
    },
    confirmationEmailTemplate = template(replacements);

  let confirmationEmail = {
    from: process.env.KEVIN_MAIL,
    to: email.email,
    subject: email.subject,
    html: confirmationEmailTemplate,
    attachments: [
      // {
      //   filename: "contactConfirmation.css",
      //   path: `${attachments}/css/`,
      //   cid: "style",
      // },
      {
        filename: "logo_full_white.svg",
        filePath: attachments + "/assets/logo_full_white.svg",
        cid: "logo123456",
      },
      // {
      //   path: `${attachments}/assets/instagram.svg`,
      //   cid: "instagram",
      // },
      // {
      //   path: `${attachments}/assets/facebook.svg`,
      //   cid: "facebook",
      // },
    ],
  };

  await transporter.sendMail(confirmationEmail, (err, response) => {
    if (err) {
      console.log(err)
      return err;
    } else {
      console.log(response)
      return response
    }
    
  });

};