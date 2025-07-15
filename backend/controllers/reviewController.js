const Review = require('../models/review');

exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const courseId = req.params.id;

  const review = await Review.create({
    course: courseId,
    user: req.user._id,
    rating,
    comment,
  });

  res.status(201).json(review);
};

exports.getReviews = async (req, res) => {
  const reviews = await Review.find({ course: req.params.id }).populate('user', 'name');
  res.json(reviews);
};
