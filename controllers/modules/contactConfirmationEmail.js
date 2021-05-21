const { transporter } = require("./transporter"),
  //{readHTMLFile} = require ("./createEmail"),
  handlebars = require("handlebars"),
  inlineCss = require("nodemailer-juice"),
  juice = require("juice"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html"

  //transporter.use("compile", inlineCss());

exports.createContactConfirmationEmail = async (email) => {

  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = {
      firstName: email.firstName,
    },
    confirmationEmailTemplate = template(replacements);

  let confirmationEmail = {
    from: process.env.KEVIN_MAIL,
    to: email.email,
    subject: email.subject,
    attachments: [
      // {
      //   filename: "logo_full_white.svg",
      //   path: attachments + "/assets/logo_full_white.svg",
      //   cid: "logo_image123",
      // },
    ],
    html: confirmationEmailTemplate,
  };

  await transporter.sendMail(confirmationEmail, (err, response) => {
    if (err) {
      console.log(err)
      return err;
    } else {
      console.log(response)
      return response;
    }
  });
};
