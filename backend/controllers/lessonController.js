const Lesson = require('../models/lesson');

exports.addLesson = async (req, res) => {
  const { title, content, videoUrl } = req.body;
  const courseId = req.params.courseId;

  const lesson = await Lesson.create({
    title,
    content,
    videoUrl,
    course: courseId,
  });

  res.status(201).json(lesson);
};

exports.getLesson = async (req, res) => {
  const lesson = await Lesson.findById(req.params.id);
  if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
  res.json(lesson);
};
