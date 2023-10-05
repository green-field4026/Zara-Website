const express = require('express');
const router = express.Router();
const {create,authenticate} = require('../controllers/users');
router.post('/register', create);
router.post('/authenticate', authenticate);
module.exports = router