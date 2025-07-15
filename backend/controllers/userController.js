const User = require('../models/user');

exports.getMyProfile = (req, res) => {
  res.json(req.user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};
