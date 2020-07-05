const router = require('express').Router();

const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');
const authMiddleware = require('../middlewares/authMiddleware');
const passport = require('../middlewares/passportMiddleware');

router.use('/auth', authRoute);
router.use('/posts',   passport.authenticate('jwt', { session: false }), authMiddleware.tokenExp,
postRoute);
router.use('/accounts',   passport.authenticate('jwt', { session: false }), authMiddleware.tokenExp,
userRoute);

module.exports = router;