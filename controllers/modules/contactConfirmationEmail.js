const { transporter } = require("./transporter"),
  //{readHTMLFile} = require ("./createEmail"),
  handlebars = require("handlebars"),
  inlineCss = require("nodemailer-juice"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html",
  attachmentsDir = "../../templates/";

exports.createContactConfirmationEmail = async (email) => {

  const attachments = path.join(__dirname, attachmentsDir) 

console.log(attachments)
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = {
      firstName: "Matilda",
    },
    confirmationEmailTemplate = template(replacements);

  let confirmationEmail = {
    from: process.env.KEVIN_MAIL,
    to: email.email,
    subject: email.subject,
    attachments: [
      // {
      //   filename: "contactConfirmation.css",
      //   path: `${attachments}/css/`,
      //   cid: "style",
      // },
      {
        filename: "logo_full_white.svg",
        path: `${attachments}/assets/`,
        cid: "logo",
      },
      {
        filename: "instagram.svg",
        path: `${attachments}/assets/`,
        cid: "instagram",
      },
      {
        filename: "facebook.svg",
        path: `${attachments}/assets/`,
        cid: "facebook",
      },
    ],
    html: confirmationEmailTemplate,
  };

  transporter.use("compile", inlineCss());
  await transporter.sendMail(confirmationEmail, (err, response) => {
    
    if (err) {
      return err;
    } else {
      return response;
    }
  });
};
