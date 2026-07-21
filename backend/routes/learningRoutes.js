const express = require('express');
const { getLearningResources, seedLearningResources } = require('../controllers/learningController');

const router = express.Router();

router.get('/seed', seedLearningResources);
router.get('/', getLearningResources);

module.exports = router;
