const authController = require('../controllers/auth_controller');
const router = require('express').Router();

router.all('/', (req, res) => {
    console.log('Parameters:\n', req.params);
    console.log('Body:\n', req.body);
    res.status(200).send({ status: "OK" });
});

module.exports = router;