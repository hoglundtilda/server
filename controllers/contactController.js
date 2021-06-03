const validate = require('../services/middleware/validation'),
  { createContactEmail } = require('./modules/contactEmail'),
  {
    createContactConfirmationEmail,
  } = require('./modules/contactConfirmationEmail');

exports.validation = validate;

exports.contact = async (req, res, err) => {
  const email = req.body.email;

  try {
    const contactEmail = await createContactEmail(email);
    const contactConfirmationEmail = await createContactConfirmationEmail(
      email
    );

    if (contactEmail === 'success' && contactConfirmationEmail === 'success')
      res.status(200).send('Ditt meddelande har skickats');

  } catch (err) {
    res.send(err);
    throw new Error(err)
  }

};
