var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');



router.get('/profile', userController.profile);
router.get('/login', userController.login);
router.get('/register', userController.register);

module.exports = router;
