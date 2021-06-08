const sgMail = require("@sendgrid/mail"),
  handlebars = require("handlebars"),
  fs = require("fs"),
  path = require("path"),
  htmlTemplate = "../../templates/html/contact.html",
  mailList = [process.env.ALEXANDER_MAIL, process.env.KEVIN_MAIL];

exports.createContactEmail = async (email) => {
  const filePath = path.join(__dirname, htmlTemplate),
    source = fs.readFileSync(filePath, "utf-8").toString(),
    template = handlebars.compile(source),
    replacements = email;
  contactEmailTemplate = template(replacements);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);


  let contactEmail = {
    from: process.env.ALEXANDER_MAIL,
    to: mailList,
    subject: `Email från: ${email.firstName} ${email.lastName}`,
    html: contactEmailTemplate,
  };

  sgMail
    .send(contactEmail)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      console.log(response[0].body);

      return 'success';
    })
    .catch((error) => {
      console.error({catchContact1: error});
      console.error(error.response.body);

      return error;
    });
};
