// src/routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const { testEndpoint } = require('../controllers/apiController');

router.get('/test', testEndpoint);

module.exports = router;