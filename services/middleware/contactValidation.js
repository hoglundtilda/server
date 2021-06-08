const { body } = require("express-validator")

exports.contactValidationRules = () => {
    
    return [
        body('firstName').matches(/^[a-zA-ZåäöÅÄÖ]+$/),
        body('lastName').matches(/^[a-zA-ZåäöÅÄÖ]+$/),
        body('email').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        body('subject').isLength({min: 2, max: 50}),
        body('message').isLength({min: 1}),
    ]
    
  }