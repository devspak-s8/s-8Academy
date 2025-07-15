const express = require('express');
const router = express.Router();
const { getCourses, createCourse, getCourse } = require('../controllers/courseController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.get('/', getCourses);
router.post('/', auth, role('instructor', 'admin'), createCourse);
router.get('/:id', getCourse);

module.exports = router;
