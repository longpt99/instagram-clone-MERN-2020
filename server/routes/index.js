const router = require('express').Router();

const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const postRoute = require('./postRoute');

router.use('/auth', authRoute);
router.use('/posts', postRoute);
router.use('/users', userRoute);

module.exports = router;