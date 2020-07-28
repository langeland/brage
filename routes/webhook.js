const express = require('express');
const webhookController = require('../controllers/webhook');
const router = express.Router();

// POST /webhook/revision-create
router.post('/revision-create', webhookController.createCevision);

module.exports = router;
