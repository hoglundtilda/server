const sgMail = require("@sendgrid/mail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html";


exports.createContactConfirmationEmail = async (email) => {
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = email;
  confirmationEmailTemplate = template(replacements);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let confirmationEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: email.email,
    subject: email.subject,
    html: confirmationEmailTemplate,
  };

  sgMail
    .send(confirmationEmail)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      return 'success';
    })
    .catch((error) => {
      console.error({catchContact2: error});
      return error;
    });
};
