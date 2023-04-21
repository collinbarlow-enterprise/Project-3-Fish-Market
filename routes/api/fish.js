const express = require('express');
const router = express.Router();
const fishCtrl = require('../../controllers/api/fishes-controller');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// GET /api/items
router.get('/', ensureLoggedIn, fishCtrl.index);
// GET /api/items/:id
router.get('/:id', ensureLoggedIn, fishCtrl.show);

module.exports = router;
