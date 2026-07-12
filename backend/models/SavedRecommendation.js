// SavedRecommendation Model
// Developer: Tilak Kumar | BML Munjal University | PS-II Internship

const mongoose = require('mongoose');

const savedRecommendationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recommendation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recommendation',
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent duplicate saves
savedRecommendationSchema.index({ user: 1, recommendation: 1 }, { unique: true });

module.exports = mongoose.model('SavedRecommendation', savedRecommendationSchema);
