const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

router.get('/check-token', usersCtrl.checkToken);

// POST /api/users/login
router.post('/login', usersCtrl.login);

module.exports = router;