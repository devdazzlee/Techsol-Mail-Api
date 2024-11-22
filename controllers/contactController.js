// controllers/contactController.js

import { sendContactEmail } from '../services/emailService.js';

export const submitContactForm = async (req, res, next) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    // Send email using the email service
    await sendContactEmail({ firstName, lastName, email, message });

    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    next(error);
  }
};
