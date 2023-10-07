const express = require('express');
const router = express.Router();
const {create,authenticate,checkpassword} = require('../controllers/users');
router.post('/register', create);
router.post('/authenticate', authenticate);
router.post('/modify',checkpassword)
module.exports = router