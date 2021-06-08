const { createContactEmail } = require("./modules/contactEmail"),
  {
    createContactConfirmationEmail,
  } = require("./modules/contactConfirmationEmail");

exports.contact = async (req, res) => {
  console.log(req.body)
  const email = req.body;

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
};
