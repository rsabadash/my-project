const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.logIn);
router.post('/logout', authController.logOut);

module.exports = router;