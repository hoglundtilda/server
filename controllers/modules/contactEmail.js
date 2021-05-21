const { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require('fs'),
  path = require("path"),
  htmlTemplate = "../../templates/html/contact.html";

exports.createContactEmail = async (email) => {
  console.log(email);

  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = {
      firstName: email.firstName,
      lastName: email.lastName,
      email: email.email,
      subject: email.subject,
      message: email.message
    },
    contactEmailTemplate = template(replacements),
    mailList = [process.env.ALEXANDER_MAIL, process.env.KEVIN_MAIL];

  let contactEmail = {
    from: process.env.KEVIN_MAIL,
    to: mailList,
    subject: `Email från: ${email.firstName + email.Lastname}`,
    html: contactEmailTemplate,
  };

  await transporter.sendMail(contactEmail, (err, response) => {
    if (err) {
      console.log(err)
      return err;
    } else {
      console.log(response)
      return response;
    }
  });
};
