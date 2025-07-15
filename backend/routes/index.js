const express = require('express');
const router = express.Router();

const authRoutes = require('../routes/authRoutes');
const courseRoutes = require('../routes/courseRoutes'); // Assuming you have a coursesRoutes file
const reviewRoutes = require('../routes/reviewRoutes'); // Assuming you have a reviewRoutes file
const enrollmentRoutes = require('../routes/enrollmentRoutes'); // Assuming you have an enrollmentRoutes file
const progressRoutes = require('../routes/progressRoutes'); // Assuming you have a progressRoutes file
const userRoutes = require('../routes/userRoutes'); // Assuming you have a userRoutes file
const lessonRoutes = require('../routes/lessonRoutes'); // Assuming you have a lessonRoutes


router.use('/users', userRoutes);
router.use('/lessons', lessonRoutes);
router.use('/reviews', reviewRoutes);
router.use('/enrollment', enrollmentRoutes);
router.use('/progress', progressRoutes);


router.use('/auth', authRoutes);
router.use('/courses', courseRoutes);

router.get('/', (req, res) => {
    res.send('API is working!');
});

module.exports = router;