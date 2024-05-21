const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "FOODAPP";
const nodemailer = require('nodemailer');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'khushalisrani999@gmail.com', // Replace with your Gmail email
    pass: 'kdsoitrjruwoczje', // Replace with your Gmail password
  },
});

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
      // Compose the email
      const mailOptions = {
      from: ' "FoodApp 🍱" khushalisrani999@gmail.com',
      to: email,
      subject: `Thank you for your Signing Up`,
      text: `Thank you for joining us.\n\nBest regards,\nFood-App Team`,
    };
      // Send the email to the user
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.json("User already exists");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await userModel.create({
        email: email,
        password: hashedPassword,
      });
      res.json("Signup successful");
      const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    }
  } catch (error) {
    console.log(error);
    res.json("Something went wrong");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
     return res.json("User not found");
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.json("Invalid credentials");
    }
    else{
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.json("exists");
    }
  } catch (error) {
    console.log(error);
    res.json("Something went wrong");
  }
};

module.exports = { signup, login };
