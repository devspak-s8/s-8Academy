const Enrollment = require('../models/Enrollment');

exports.enrollCourse = async (req, res) => {
  const { id: courseId } = req.params;
  const userId = req.user._id;

  const enrollment = await Enrollment.create({ course: courseId, user: userId });
  res.status(201).json(enrollment);
};
