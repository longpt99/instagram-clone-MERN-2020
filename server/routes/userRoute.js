const express = require('express');

const router = express.Router();
const controller = require('../controllers/userController');
const passport = require('../middlewares/passportMiddleware');

router.get('/getUser', passport.authenticate('jwt', { session: false }), controller.getUser);


module.exports = router;