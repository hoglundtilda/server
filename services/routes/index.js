const { Router } = require("express"),
  router = new Router(),
  validation = require('../middleware/validation');
  contactController = require("../../controllers/contactController.js");
  orderController = require("../../controllers/orderController.js");

router.route("/email/contact").post(contactController.contact);
router.route("/email/order").post(orderController.contact);

module.exports = router;
