const sgMail = require("@sendgrid/mail"),
  { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contact.html",
  mailList = [process.env.ALEXANDER_MAIL];

exports.createContactEmail = (email) => {
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

  transporter
    .sendMail(contactEmail, (error, info) => {
      if(error) {
        throw new Error(error)
      } else {
        console.log({info})
      }
    });
};
