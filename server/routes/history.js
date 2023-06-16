const express = require('express');
const Controller = require('../controllers/controller');
const authenticate = require('../middleware/authentication');
const router = express.Router();

router.get('/', authenticate, Controller.readHistories);

module.exports = router;