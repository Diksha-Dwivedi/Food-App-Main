const mongoose = require('mongoose');

// Create a schema for the contact form data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  source: String,
  message: String,
});

module.exports = mongoose.model('Contact', contactSchema);
