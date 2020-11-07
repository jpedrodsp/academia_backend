const express = require('express');
const router = express.Router();

// Request JSON treatment middleware
router.use(express.json());

// Default index route
router.get('/', (req, res, next) => {
    res.status(200).send({ status: "OK" });
});

// Import routes