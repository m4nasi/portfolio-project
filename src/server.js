const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "Gmail", // or another service like 'Outlook', 'Yahoo'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "manasimehta11@outlook.com", // Your email address
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
