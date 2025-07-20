const Course = require('../models/course');

exports.getCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name');
  res.json(courses);
};

exports.createCourse = async (req, res) => {
  const { title, description, price } = req.body;

  const course = await Course.create({
    title,
    description,
    price,
    instructor: req.user._id,
  });

  res.status(201).json(course);
};

exports.getCourse = async (req, res) => {
  const course = await Course.findById(req.params.id)
    .populate('instructor', 'name')
    .populate('lessons');
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};
exports.updateCourse = async (req, res) => {
  const { title, description, price } = req.body;

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    { title, description, price },
    { new: true }
  );

  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};
exports.deleteCourse = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json({ message: 'Course deleted successfully' });
};