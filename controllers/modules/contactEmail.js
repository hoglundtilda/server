const sgMail = require("@sendgrid/mail"),
  { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contact.html",
  mailList = [process.env.ALEXANDER_MAIL];

exports.createContactEmail = async (email) => {
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = email;
  contactEmailTemplate = template(replacements);

  let contactEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: mailList,
    subject: `Email från: ${email.firstName} ${email.lastName}`,
    html: contactEmailTemplate,
  };

  await transporter
    .sendMail(contactEmail)
    .then((response) => {
      console.log(response)
      return response;
    })
    .catch((error) => {
      console.error({ catchContact2: error });
      return error;
    });
};
