const express = require('express');
const multer = require('multer');

const router = express.Router();
const controller = require('../controllers/userController');
const passport = require('../middlewares/passportMiddleware');

router.get('/getUser', passport.authenticate('jwt', { session: false }), controller.getUser);
router.post('/postImage', controller.postImage);



module.exports = router;