const { body } = require("express-validator")

exports.orderValidationRules = () => {
    
    return [
      // body('firstName').matches(/^[a-zA-ZåäöÅÄÖ]+$/),
      // body('lastName').matches(/^[a-zA-ZåäöÅÄÖ]+$/),
      body('street').isLength({ min: 5 }),
      body('postNr').matches(/^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/),
      body('state').isLength({ min: 2 }),
      body('email').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      body('phoneNr').matches(/(\+\d{2})?((\(0\)\d{2,3})|\d{2,3})?\d+/),
      body('color').isLength({min: 5}),
      body('information').isString(),
      body('charging_cable').isBoolean(),
      body('consultation').isBoolean(),
      body('agreement').matches(true),
    ]
    
  }