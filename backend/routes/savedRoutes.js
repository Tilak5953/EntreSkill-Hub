const express = require('express');
const router = express.Router();
const { saveRecommendation, unsaveRecommendation, getSavedRecommendations } = require('../controllers/savedController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getSavedRecommendations);
router.post('/:id', protect, saveRecommendation);
router.delete('/:id', protect, unsaveRecommendation);

module.exports = router;
