const express = require('express')

const router = express.Router()

const registerUser = require('./userController')

router.route("/register")
    .post(registerUser);
router.route("/product")
    .delete(registerUser);

module.exports = router;