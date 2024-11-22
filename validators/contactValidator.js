// validators/contactValidator.js

import { check, validationResult } from 'express-validator';

export const validateContactForm = [
  check('firstName').trim().notEmpty().withMessage('First Name is required.'),
  check('lastName').trim().notEmpty().withMessage('Last Name is required.'),
  check('email').isEmail().withMessage('Valid email is required.'),
  check('message').trim().notEmpty().withMessage('Message is required.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return the first error message
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  },
];
