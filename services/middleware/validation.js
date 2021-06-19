validationResult = require("express-validator").validationResult;

exports.validate = async (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  console.log(extractedErrors);

  return res.status(422).json({
    errors: extractedErrors,
  });
};
