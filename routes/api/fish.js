const express = require('express');
const router = express.Router();
const fishCtrl = require('../../controllers/api/fishes-controller');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, fishCtrl.index);
router.get('/:id', ensureLoggedIn, fishCtrl.show);

module.exports = router;
