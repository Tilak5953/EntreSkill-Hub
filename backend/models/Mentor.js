const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    bio: { type: String, required: true },
    expertise: [String],
    experienceYears: { type: Number, required: true },
    rating: { type: Number, default: 5.0 },
    reviews: { type: Number, default: 0 },
    imageUrl: { type: String },
    linkedInUrl: { type: String },
    isActive: { type: Boolean, default: true },
    priceSession: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Mentor', mentorSchema);
