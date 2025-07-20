const express = require('express');
const router = express.Router();
const { enrollCourse } = require('../controllers/enrollmentController');
const auth = require('../middlewares/authMiddleware');

router.post('/:id/enroll', auth, enrollCourse);

module.exports = router;
