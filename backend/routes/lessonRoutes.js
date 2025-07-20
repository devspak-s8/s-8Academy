const express = require('express');
const router = express.Router();
const { addLesson, getLesson } = require('../controllers/lessonController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.post('/:courseId', auth, role('instructor', 'admin'), addLesson);
router.get('/view/:id', auth, getLesson);

module.exports = router;
