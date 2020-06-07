const express = require('express');

const router = express.Router();
const controller = require('../controllers/userController');
const passport = require('../config/passport');

router.get('/getUser', passport.authenticate('jwt', { session: false }), controller.getUser);

module.exports = router;