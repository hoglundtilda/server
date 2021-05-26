const validate = require("../services/middleware/validation"),
  { createContactEmail } = require("./modules/contactEmail"),
  {
    createContactConfirmationEmail,
  } = require("./modules/contactConfirmationEmail");

exports.validation = validate;

exports.contact = async (req, res, err) => {
  const email = req.body.email;

  try {
    const contactEmail = await createContactEmail(email);
    const contactConfirmationEmail = await createContactConfirmationEmail(
      email
    );

    if (contactEmail === "success" && contactConfirmationEmail === "success")
      res.json("success");
  } catch (err) {
    if (err) {
      res.send(err);
    }
  }

  // await createContactEmail(email).then((response) => {
  //   console.log(response)
  //   res.json(response);
  // });

  // await createContactConfirmationEmail(email).then((response) => {
  //   console.log(response)
  //   res.json(response);
  // });
};
