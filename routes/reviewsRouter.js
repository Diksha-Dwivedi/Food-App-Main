const express = require('express');
const router = express.Router();
const { addReview } = require('../controllers/reviewsController');

// Add review to a specific plan
router.post('/:planId', addReview);

module.exports = router;
