const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router();

// router.get('/', Controller.readCategories)
router.post('/', Controller.register);
router.post('/login', Controller.login);
router.post('/loginGoogle', Controller.loginGoogle);

module.exports = router;