const { transporter } = require("./transporter"),
  handlebars = require("handlebars"),
  fs = require('fs'),
  path = require("path"),
  htmlTemplate = "../../templates/html/contact.html",
  mailList = [process.env.ALEXANDER_MAIL, process.env.KEVIN_MAIL];


exports.createContactEmail = async (email) => {
  console.log(email);

  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = email
    contactEmailTemplate = template(replacements)

  let contactEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: mailList,
    subject: `Email från: ${email.firstName} ${email.lastName}`,
    html: contactEmailTemplate,
  };

  await transporter.sendMail(contactEmail, (err, response) => {
    if (err) {
      console.log(err)
      return err;
    } else {
      console.log(response)
      return 'success'
      //return response;
    }
  });
};
