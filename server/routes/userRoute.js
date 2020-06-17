const express = require('express');

const router = express.Router();
const controller = require('../controllers/userController');
const passport = require('../middlewares/passportMiddleware');

router.get('/admin', passport.authenticate('jwt', { session: false }), controller.getAdmin);
router.post('/admin/image', passport.authenticate('jwt', { session: false }), controller.postImage);
router.get('/admin/following/posts', passport.authenticate('jwt', { session: false }), controller.getFollowingPosts);

router.get('/user/profile', controller.getUserProfile);
router.get('/suggested', passport.authenticate('jwt', { session: false }),controller.getSuggestedUsers);
router.post('/user/send-request', passport.authenticate('jwt', { session: false }),controller.sendFollowUser);

router.post('/user/post/comment', passport.authenticate('jwt', { session: false }),controller.postComment);

module.exports = router;