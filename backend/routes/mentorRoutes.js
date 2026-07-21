const express = require('express');
const { getMentors, seedMentors } = require('../controllers/mentorController');

const router = express.Router();

router.get('/seed', seedMentors);
router.get('/', getMentors);

module.exports = router;
