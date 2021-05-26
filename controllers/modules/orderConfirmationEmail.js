const { transporter } = require("./transporter"),
  //{readHTMLFile} = require ("./createEmail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/orderConfirmation.html";

exports.createOrderConfirmationEmail = async (order) => {
  
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = order
    confirmationEmailTemplate = template(replacements);

  let confirmationEmail = {
    from: process.env.KEVIN_MAIL,
    to: order.email,
    subject: order.subject,
    html: confirmationEmailTemplate,
  };

  await transporter.sendMail(confirmationEmail, (err, response) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(response);
      return response;
    }
  });
};
