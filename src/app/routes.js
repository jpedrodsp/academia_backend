const router = require('express').Router();

// Default index route
router.get('/', (req, res, next) => {
    res.status(200).send({ status: "OK" });
});

module.exports = router;