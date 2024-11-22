// config/emailConfig.js

import dotenv from 'dotenv';

dotenv.config();

export const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your App Password
  },
};
