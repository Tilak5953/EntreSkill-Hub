const express = require('express');
const { getUserProgress } = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getUserProgress);

module.exports = router;
