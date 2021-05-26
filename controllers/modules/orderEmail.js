const { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require('fs'),
  path = require("path"),
  htmlTemplate = "../../templates/html/order.html",
  mailList = [process.env.ALEXANDER_MAIL, process.env.KEVIN_MAIL];


exports.createOrderEmail = async (order) => {

  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = order
    orderEmailTemplate = template(replacements)

  let orderEmail = {
    from: process.env.KEVIN_MAIL,
    to: mailList,
    subject: `Beställning från: ${order.firstName} ${order.lastName}`,
    html: orderEmailTemplate,
  };

  await transporter.sendMail(orderEmail, (err, response) => {
    if (err) {
      console.log(err)
      return err;
    } else {
      console.log(response)
      return response;
    }
  });
};
