const path = require('path');

const express = require('express');
const specificationsController = require('../controllers/specifications');
const revisionsController = require('../controllers/revisions');

const router = express.Router();

router.get('/specifications', specificationsController.getSpecifications);
router.get('/specifications/{specification}', specificationsController.getSpecification);
router.get('/specifications/{revision}', revisionsController.getRevision);

module.exports = router;