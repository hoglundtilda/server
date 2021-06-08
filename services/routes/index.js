const { Router } = require("express"),
  router = new Router(),
  { contactValidationRules } = require("../middleware/contactValidation"),
  { orderValidationRules } = require("../middleware/orderValidationRules"),
  { validate } = require("../middleware/validation"),
  contactController = require("../../controllers/contactController.js"),
  orderController = require("../../controllers/orderController.js");

router
  .route("/email/contact")
  .post(contactValidationRules(), validate, contactController.contact);
  
router
  .route("/email/order")
  .post(orderValidationRules(), validate, orderController.order);

module.exports = router;
