const { createOrderEmail } = require("./modules/orderEmail"),
  {
    createOrderConfirmationEmail,
  } = require("./modules/orderConfirmationEmail");

exports.order = async (req, res, err) => {
  let order = req.body;
  order.charging_cable = order.charging_cable ? "Ja" : " Nej";
  order.consultation = order.consultation ? "Ja" : " Nej";

  try {
    await createOrderEmail(order);
    await createOrderConfirmationEmail(order);

    res.write({ status: 200, message: "Ditt meddelande har skickats" });
  } catch (error) {
    console.log(error);
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
