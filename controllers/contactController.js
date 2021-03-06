const { createContactEmail } = require('./modules/contactEmail'),
  {
    createContactConfirmationEmail,
  } = require('./modules/contactConfirmationEmail');

exports.contact = async (req, res) => {
  const email = req.body;

  try {
    await createContactEmail(email);
    await createContactConfirmationEmail(email);

    res
      .status(200)
      .send({ success: true, message: 'Ditt meddelande har skickats', status: 200 });
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message:
        'Tyvärr något gick fel, vänligen kontakta oss per telefon eller email',
      error: err,
    });
  }
};
