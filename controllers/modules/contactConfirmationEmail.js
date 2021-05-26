const { transporter } = require("./transporter"),
  //{readHTMLFile} = require ("./createEmail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html";

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
    html: confirmationEmailTemplate,
  };

  await transporter.sendMail(confirmationEmail, (err, response) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(response);
      return response;
    }
  });
};
