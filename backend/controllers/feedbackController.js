const Feedback = require('../models/Feedback');

// @desc    Submit new feedback
// @route   POST /api/feedback
// @access  Public
const submitFeedback = async (req, res) => {
  try {
    const { name, email, message, rating } = req.body;

    if (!name || !email || !message || !rating) {
      return res.status(400).json({ success: false, message: 'Please provide all fields including rating' });
    }

    const feedback = await Feedback.create({
      name,
      email,
      message,
      rating,
    });

    if (feedback) {
      res.status(201).json({
        success: true,
        message: 'Feedback submitted successfully',
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid feedback data' });
    }
  } catch (error) {
    console.error('Error in submitFeedback:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { submitFeedback };
