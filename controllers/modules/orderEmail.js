const sgMail = require('@sendgrid/mail'),
  { transporter } = require('./transporter'),
  handlebars = require('handlebars'),
  fs = require('fs'),
  path = require('path'),
  htmlTemplate = '../../templates/html/order.html',
  mailList = [process.env.ALEXANDER_MAIL];

exports.createOrderEmail = async (order) => {
  console.log(order);
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, 'utf-8').toString(),
    template = handlebars.compile(source),
    replacements = order;
  orderEmailTemplate = template(replacements);

  let orderEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: mailList,
    subject: `Beställning från: ${order.firstName} ${order.lastName}`,
    html: orderEmailTemplate,
  };

  await transporter.sendMail(orderEmail, (error, info) =>  {
    if (!error) {
      return info;
    } else {
      throw new Error(error);
    }
  });
};
