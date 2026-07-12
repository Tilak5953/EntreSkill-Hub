// Saved Recommendations Controller
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const SavedRecommendation = require('../models/SavedRecommendation');

// @desc    Save a business recommendation
// @route   POST /api/saved/:id
// @access  Private
const saveRecommendation = async (req, res) => {
  try {
    const existing = await SavedRecommendation.findOne({
      user: req.user._id,
      recommendation: req.params.id,
    });

    if (existing) {
      return res.status(400).json({ success: false, message: 'Already saved' });
    }

    const saved = await SavedRecommendation.create({
      user: req.user._id,
      recommendation: req.params.id,
    });

    res.status(201).json({ success: true, message: 'Business saved successfully', saved });
  } catch (error) {
    console.error('Save error:', error);
    res.status(500).json({ success: false, message: 'Server error while saving' });
  }
};

// @desc    Unsave a business recommendation
// @route   DELETE /api/saved/:id
// @access  Private
const unsaveRecommendation = async (req, res) => {
  try {
    const result = await SavedRecommendation.findOneAndDelete({
      user: req.user._id,
      recommendation: req.params.id,
    });

    if (!result) {
      return res.status(404).json({ success: false, message: 'Saved recommendation not found' });
    }

    res.json({ success: true, message: 'Business removed from saved list' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error while removing saved item' });
  }
};

// @desc    Get all saved recommendations for logged-in user
// @route   GET /api/saved
// @access  Private
const getSavedRecommendations = async (req, res) => {
  try {
    const saved = await SavedRecommendation.find({ user: req.user._id })
      .populate('recommendation')
      .sort({ createdAt: -1 });

    res.json({ success: true, count: saved.length, saved });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching saved recommendations' });
  }
};

module.exports = { saveRecommendation, unsaveRecommendation, getSavedRecommendations };
