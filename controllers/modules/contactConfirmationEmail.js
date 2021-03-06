const sgMail = require('@sendgrid/mail'),
  { transporter } = require('./transporter'),
  handlebars = require('handlebars'),
  fs = require('fs'),
  path = require('path'),
  htmlTemplate = '../../templates/html/contactConfirmation.html';

exports.createContactConfirmationEmail = async (email) => {
  console.log(email);
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, 'utf-8').toString(),
    template = handlebars.compile(source),
    replacements = email;
  confirmationEmailTemplate = template(replacements);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let confirmationEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: email.email,
    subject: 'Tack för ditt meddelande',
    html: confirmationEmailTemplate,
  };

  await sgMail.send(confirmationEmail).then((response) => {
    console.log(response[0].statusCode);
    console.log(response[0].headers);
    return response;
  });
};
