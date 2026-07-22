const Mentor = require('../models/Mentor');
const mentorsData = require('../data/mentors');

// @desc    Get all mentors
// @route   GET /api/mentors
// @access  Public
const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find({ isActive: true }).sort({ rating: -1 });
    res.json({ success: true, count: mentors.length, mentors });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching mentors' });
  }
};

// @desc    Seed mentors into MongoDB
// @route   GET /api/mentors/seed
// @access  Public
const seedMentors = async (req, res) => {
  try {
    await Mentor.deleteMany({});
    const inserted = await Mentor.insertMany(mentorsData);
    let insertedCount = inserted.length;
    res.json({ success: true, message: 'Mentors seeded', insertedCount });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error while seeding mentors' });
  }
};

module.exports = { getMentors, seedMentors };
