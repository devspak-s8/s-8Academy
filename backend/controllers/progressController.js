const Progress = require('../models/progress');

exports.markLessonCompleted = async (req, res) => {
  const { courseId, lessonId } = req.body;
  const userId = req.user._id;

  let progress = await Progress.findOne({ user: userId, course: courseId });

  if (!progress) {
    progress = await Progress.create({ user: userId, course: courseId, completedLessons: [lessonId] });
  } else {
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      await progress.save();
    }
  }

  res.json(progress);
};
