// services/emailService.js

import nodemailer from 'nodemailer';
import { emailConfig } from '../config/emailConfig.js';

export const sendContactEmail = async ({ firstName, lastName, email, message }) => {
  // Create a transporter
  const transporter = nodemailer.createTransport(emailConfig);

  // Email options
  const mailOptions = {
    from: `<${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO,
    subject: 'New Contact Form Submission',
    html: `
       <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="background-color: #f7f7f7; padding: 20px; border-bottom: 1px solid #e2e2e2; text-align: center;">
      <img src="https://res.cloudinary.com/dh7btgc82/image/upload/v1732260598/Logo_for_profile-01_dpbmbq.png" alt="Company Logo" style="max-width: 150px;">
      <h1 style="color: #333; margin-top: 20px;">New Contact Form Submission</h1>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; line-height: 1.5;">
        <strong style="color: #555;">Name:</strong> ${firstName} ${lastName}
      </p>
      <p style="font-size: 16px; line-height: 1.5;">
        <strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a>
      </p>
      <p style="font-size: 16px; line-height: 1.5;">
        <strong style="color: #555;">Message:</strong>
      </p>
      <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #e2e2e2; border-radius: 5px;">
        <p style="font-size: 16px; line-height: 1.5; margin: 0;">${message}</p>
      </div>
      <div style="padding: 20px; text-align: center;">
        <a href="mailto:${email}" style="background-color: #1a73e8; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">
          Reply to ${firstName}
        </a>
      </div>
    </div>
    <div style="background-color: #f7f7f7; padding: 10px; text-align: center; border-top: 1px solid #e2e2e2;">
      <p style="font-size: 12px; color: #777; margin: 0;">
        This email was sent from your website's contact form.
      </p>
    </div>
  </div>

    `,
  };
console.log("mailOptions" , mailOptions)
  // Send the email
  let e = await transporter.sendMail(mailOptions);
  console.log("e ", e)
};
