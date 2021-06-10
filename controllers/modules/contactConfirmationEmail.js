const sgMail = require("@sendgrid/mail"),
  { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contactConfirmation.html";

exports.createContactConfirmationEmail = async (email) => {
  console.log(email)
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = email;
  confirmationEmailTemplate = template(replacements);

  let confirmationEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: email.email,
    subject: email.subject,
    html: confirmationEmailTemplate,
  };

  await transporter
    .sendMail(confirmationEmail)
    .then((error, info) => {
      console.log({error})
      console.log({info})
    
    });
};
