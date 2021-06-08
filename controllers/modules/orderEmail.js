const sgMail = require("@sendgrid/mail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/order.html",
  mailList = [process.env.ALEXANDER_MAIL, process.env.KEVIN_MAIL];

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

  sgMail
    .send(orderEmail)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      return "success";
    })
    .catch((error) => {
      console.error({catchOrder1: error});
      return error;
    });
};
