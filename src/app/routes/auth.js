const authController = require('../controllers/auth_controller');
const router = require('express').Router();

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const authResult = authController.authenticate(email, password);
    if (authResult) {
        res.status(200).send({ status: "OK", auth: { authResult } });
    }
    else {
        res.status(400).send({ status: "ERROR", error: "Failed to authenticate." });
    }
});

router.post('/register', (req, res) => {
    const registerResult = authController.register(req.body);
    if (registerResult) {
        res.status(200).send({ status: "OK" });
    }
    else {
        res.status(400).send({ status: "ERROR", error: "Failed to register user." });
    }
});

module.exports = router;