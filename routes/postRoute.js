const express = require('express');
const multer = require('multer');

const router = express.Router();
const controller = require('../controllers/postController');
const passport = require('../middlewares/passportMiddleware');

const upload = multer({ dest: process.env.NODE_ENV === 'production' ? "tmp/uploads/postImages" : "public/uploads/postImages" })

router.get('/:id', controller.getPostContent);

router.post(
  '/:id/comment',
  passport.authenticate('jwt', { session: false }),
  controller.postComment
);
router.post(
  '/:id/reaction',
  passport.authenticate('jwt', { session: false }),
  controller.postLikePhoto
);
router.post(
  '/upload',
  passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  controller.uploadImage
)

router.delete(
  '/:id/reaction',
  passport.authenticate('jwt', { session: false }),
  controller.deleteLikePhoto
)

module.exports = router;
