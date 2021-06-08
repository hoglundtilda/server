const { createContactEmail } = require("./modules/contactEmail"),
  {
    createContactConfirmationEmail,
  } = require("./modules/contactConfirmationEmail");

exports.contact = async (req, res, err) => {
  const email = req.body;
  console.log(email)

  try {
    await createContactEmail(email);
    await createContactConfirmationEmail(email);

    res.status(200).send({ message: "Ditt meddelande har skickats" });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: err,
    });
  }

  if (err) {
    res.status(500).send({
      error: err,
    });
  }
};
