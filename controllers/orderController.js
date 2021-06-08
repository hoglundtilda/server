const { createOrderEmail } = require("./modules/orderEmail"),
  {
    createOrderConfirmationEmail,
  } = require("./modules/orderConfirmationEmail");

exports.order = async (req, res, err) => {
  let order = req.body;
  order.charging_cable = order.charging_cable ? "Ja" : " Nej";
  order.consultation = order.consultation ? "Ja" : " Nej";

  try {
    const orderEmail = await createOrderEmail(order);
    const orderConfirmationEmail = await createOrderConfirmationEmail(order);

    if (orderEmail === "success" && orderConfirmationEmail === "success") {
      res.status(200).send("Beställning skickad");
    } else {
      res
        .status(500)
        .send(
          "Tyvärr något gick fel, vänligen kontakta oss per telefon eller email"
        );
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        "Tyvärr något gick fel, vänligen kontakta oss per telefon eller email"
      );
  }
};
