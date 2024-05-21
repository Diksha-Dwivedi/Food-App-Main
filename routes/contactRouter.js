const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const ContactModel = require('../models/contactSchema');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'khushalisrani999@gmail.com', // Replace with your Gmail email
    pass: 'kdsoitrjruwoczje', // Replace with your Gmail password
  },
});

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// API endpoint to handle form submission
router.post('/', async (req, res) => {
  const { name, email, source, message } = req.body;

  try {
    // Save the form data to the database
    const contactData = new ContactModel({ name, email, source, message });
    await contactData.save();

    // Compose the email
    const mailOptions = {
      from: 'Month-Meals',
      to: email,
      subject: `Thank you for your message, ${name}`,
      text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Contact Form Team`,
    };

    // Send the email to the user
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    return res.status(200).json({ message: 'Form data saved and email sent successfully.' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Failed to save data to the database.' });
  }
});

module.exports = router;
