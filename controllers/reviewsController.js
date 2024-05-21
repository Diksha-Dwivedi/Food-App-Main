const Review = require('../models/reviewModel');

// Function to add a new review
const addReview = async (req, res) => {
  try {
    const { review, rating } = req.body;
    const { planId } = req.params;

    // Create a new review document
    const newReview = new Review({
      review,
      rating,
      user: req.user._id, // Assuming you have user authentication and req.user contains the user's _id
      plan: planId,
    });

    // Save the new review to the database
    await newReview.save();

    res.status(201).json({ message: 'Review added successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

module.exports = { addReview };
