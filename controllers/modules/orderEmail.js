const { transporter } = require("./transporter"),
  sgMail = require("@sendgrid/mail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/order.html",
  mailList = [process.env.ALEXANDER_MAIL, process.env.KEVIN_MAIL];

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.createOrderEmail = async (order) => {
  console.log(order);
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = order;
  orderEmailTemplate = template(replacements);

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
    })
    .catch((error) => {
      console.error(error);
    });

  // await transporter.sendMail(orderEmail, (err, response) => {
  //   if (err) {
  //     console.log(err);
  //     return err
  //   } else {
  //     console.log({ response: response });
  //     return "success";
  //   }
  // });
};
