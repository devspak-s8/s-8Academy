const express = require('express');
const router = express.Router();
const { getMyProfile, getAllUsers } = require('../controllers/userController');
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');

router.get('/me', auth, getMyProfile);
router.get('/', auth, role('admin'), getAllUsers);

module.exports = router;
