const validate = require("../../services/middleware/validation"),
  { createContactEmail } = require("../modules/contactEmail"),
  {
    createContactConfirmationEmail,
  } = require("../modules/olcConfirmationEmail");

exports.validation = validate;

exports.contact = async (req, res, err) => {
  const email = req.body.email;
  //await createContactEmail(email);

  await createContactConfirmationEmail(email).then((response) => {
    console.log(response)
    res.json(response);
  });
};
