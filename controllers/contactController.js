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
        "Tyvärr något gick fel, vänligen kontakta oss per telefon eller email",
    });
  } finally {
    res.send();
  }

  if (err) {
    res.write({
      status: 500,
      message:
        "Tyvärr något gick fel, vänligen kontakta oss per telefon eller email",
    });
    res.send();
  }
};
