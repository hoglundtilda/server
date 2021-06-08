const { transporter } = require("./transporter"),
  sgMail = require("@sendgrid/mail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/orderConfirmation.html";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.createOrderConfirmationEmail = async (order) => {

  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = order;
  confirmationEmailTemplate = template(replacements);

  let confirmationEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: order.email,
    subject: "Tack för din beställning",
    html: confirmationEmailTemplate,
  };

  sgMail
    .send(confirmationEmail)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });

  // await transporter.sendMail(confirmationEmail, (err, response) => {
  //   if (err) {
  //     console.log(err);
  //     return err
  //   } else {
  //     console.log({ response: response });
  //     return "success";
  //   }
  // });
};
