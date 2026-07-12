const express = require('express');
const router = express.Router();
const { getPersonalisedRecommendations, getRecommendationById, seedRecommendations } = require('../controllers/recommendController');
const { protect } = require('../middleware/authMiddleware');

router.get('/seed', seedRecommendations);       // public — admin utility
router.get('/', protect, getPersonalisedRecommendations);
router.get('/:id', protect, getRecommendationById);

module.exports = router;
