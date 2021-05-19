const { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require('fs'),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html";

exports.contactConfirmationEmail = async (email) => {
  console.log({ confirmationEmail: email });

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
      return console.log(err);
    }
    console.log("Message %s sent: %s", response, response);
  });

  console.log(email);
};
