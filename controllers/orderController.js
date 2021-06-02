const validate = require('../services/middleware/validation'),
  { createOrderEmail } = require('./modules/orderEmail'),
  {
    createOrderConfirmationEmail,
  } = require('./modules/orderConfirmationEmail');

exports.validation = validate;

exports.order = async (req, res, err) => {
  const order = req.body.order;

  try {
    const orderEmail = await createOrderEmail(order);
    const orderConfirmationEmail = await createOrderConfirmationEmail(order);

    if (orderEmail === 'success' && orderConfirmationEmail === 'success')
      res.json('success');
  } catch (err) {
      res.send(err);
  }
};
