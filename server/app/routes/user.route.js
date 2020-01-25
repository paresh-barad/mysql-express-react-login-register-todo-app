const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post('/registerMe', userController.register);
router.post('/loginMe', userController.login);
// router.get('/:id', userController.getById);

module.exports = router;


