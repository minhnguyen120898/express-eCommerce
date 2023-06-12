'use strict';

const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller')

router.post('/shop/signup', authController.signUp);

module.exports = router;