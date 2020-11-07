const express = require('express');
const router = express.Router();
const routes = require('./routes');

// Request JSON treatment middleware
router.use(express.json());

// Import routes
router.use(routes);