const sgMail = require("@sendgrid/mail"),
  { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/order.html",
  mailList = [process.env.ALEXANDER_MAIL];

exports.createOrderEmail = async (order) => {
  console.log(order);
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = order;
  orderEmailTemplate = template(replacements);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  let orderEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: mailList,
    subject: `Beställning från: ${order.firstName} ${order.lastName}`,
    html: orderEmailTemplate,
  };

 await transporter.sendMail(orderEmail, function (error, info) {
    if (error) {
      console.log(error)
      throw new Error(error)
    } else {
      console.log(info)
      return info
    }
  });
};
