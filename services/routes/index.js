const { Router } = require("express"),
  router = new Router(),
  validation = require('../middleware/validation');
  contactController = require("../../controllers/contact/contactController.js");

router.route("/email/contact").post(contactController.contact);

module.exports = router;
