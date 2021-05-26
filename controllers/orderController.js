const validate = require("../services/middleware/validation"),
  { createOrderEmail } = require("./modules/orderEmail"),
  {
    createOrderConfirmationEmail,
  } = require("./modules/orderConfirmationEmail");

exports.validation = validate;

exports.contact = async (req, res, err) => {
  const order = req.body.order;

  await createOrderEmail(order).then((response) => {
    console.log(response)
    res.json(response);
  });

//   await createOrderConfirmationEmail(order).then((response) => {
//     console.log(response)
//     res.json(response);
//   });
};