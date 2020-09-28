const express = require('express');

const router = express.Router();
const controller = require('../controllers/authController');

router.post('/login', controller.postLogin);
router.post('/register', controller.postRegister);

module.exports = router;
