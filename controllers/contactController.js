const { createContactEmail } = require("./modules/contactEmail"),
  {
    createContactConfirmationEmail,
  } = require("./modules/contactConfirmationEmail");

exports.contact = async (req, res, err) => {
  const email = req.body;

  try {
    await createContactEmail(email);
    await createContactConfirmationEmail(email);

    res.write({ status: 200, message: "Ditt meddelande har skickats" });
  } catch (err) {
    console.log(err);
    res.write({
      status: 500,
      message:
        "1 Tyvärr något gick fel, vänligen kontakta oss per telefon eller email",
    });
  }

  if (err) {
    res.write({
      status: 500,
      message:
        "2 Tyvärr något gick fel, vänligen kontakta oss per telefon eller email",
    });
    res.send();
  }
};
