const express = require('express');

const router = express.Router();
const controller = require('../controllers/userController');
const passport = require('../middlewares/passportMiddleware');

router.get(
  '/admin',
  passport.authenticate('jwt', { session: false }),
  controller.getAdmin
);
router.get(
  '/admin/following/posts',
  passport.authenticate('jwt', { session: false }),
  controller.getFollowingPostList
);
router.get('/search', controller.searchUsername);
router.get(
  '/admin/following/suggestion',
  passport.authenticate('jwt', { session: false }),
  controller.getSuggestedUserList
);

router.post(
  '/admin/followers/request',
  passport.authenticate('jwt', { session: false }),
  controller.sendFollowerRequest
);

router.get('/:nickname', controller.getUserProfile);

module.exports = router;
