const express = require('express');

const router = express.Router();
const controller = require('../controllers/postController');
const passport = require('../middlewares/passportMiddleware');

router.get('/:id', controller.getPostContent);

router.post(
  '/:id/reaction',
  passport.authenticate('jwt', { session: false }),
  controller.postLikePhoto
);
// router.post(
//   '/:id/comment',
//   passport.authenticate('jwt', { session: false }),
//   controller.postComment
// );

router.delete(
  '/:id/reaction',
  passport.authenticate('jwt', { session: false }),
  controller.deleteLikePhoto
)

module.exports = router;
