const express = require('express');
const router = express.Router();
const { addReview, getReviews } = require('../controllers/reviewController');
const auth = require('../middlewares/authMiddleware');

router.post('/:id/reviews', auth, addReview);
router.get('/:id/reviews', getReviews);

module.exports = router;
