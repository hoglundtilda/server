const sgMail = require('@sendgrid/mail'),
  { transporter } = require('./transporter'),
  handlebars = require('handlebars'),
  fs = require('fs'),
  path = require('path'),
  htmlTemplate = '../../templates/html/orderConfirmation.html';

exports.createOrderConfirmationEmail = async (order) => {
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, 'utf-8').toString(),
    template = handlebars.compile(source),
    replacements = order;
  confirmationEmailTemplate = template(replacements);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let confirmationEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: order.email,
    subject: 'Tack för din beställning',
    html: confirmationEmailTemplate,
  };

  await transporter.sendMail(confirmationEmail, (error, info) => {
    if (error) {
      throw new Error(error)
    } else {
      console.log(info)
      return info
    }
  });
};
