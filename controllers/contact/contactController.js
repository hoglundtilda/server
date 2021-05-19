const validate = require("../../services/middleware/validation"),
  {contactEmail} = require("../modules/contactEmail"),
  {contactConfirmationEmail} = require("../modules/contactConfirmationEmail");

exports.validation = validate;

exports.contact = async (req, res, err) => {
  const email = req.body.email;

  //await contactEmail(email);
  await contactConfirmationEmail(email);

};
