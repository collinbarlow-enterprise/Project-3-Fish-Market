const express = require('express');
const router = express.Router();
const fishCtrl = require('../../controllers/api/fishes-controller');

// GET /api/items
router.get('/', fishCtrl.index);
// GET /api/items/:id
router.get('/:id', fishCtrl.show);

module.exports = router;
