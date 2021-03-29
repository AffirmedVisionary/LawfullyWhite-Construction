const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

dotenv.config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL, // your email address to send email from
    pass: process.env.GMAIL_PASSWORD // your gmail account password
  }
});

module.exports = transporter;