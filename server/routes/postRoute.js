const express = require('express');

const router = express.Router();
const controller = require('../controllers/postController');
const passport = require('../middlewares/passportMiddleware');

router.get('/:id', controller.getPostContent)

module.exports = router;