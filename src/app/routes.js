const router = require('express').Router();
const authRoute = require('./routes/auth');

// Default index route
router.get('/', (req, res, next) => {
    res.status(200).send({ status: "OK" });
});

router.route('/auth', authRoute)

module.exports = router;