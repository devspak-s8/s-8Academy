const express = require('express');
const router = express.Router();
const { markLessonCompleted } = require('../controllers/progressController');
const auth = require('../middlewares/authMiddleware');

router.post('/mark', auth, markLessonCompleted);

module.exports = router;
