var express = require('express');
var router = express.Router();

/* Import model */
let users = require('../models/users');

/* Import middleware */
let auth = require('../middlewares/auth');

/* GET users listing. */
router.get('/login', auth.userToken, function (req, res, next) {
    res.json(users);
});

/* GET users listing. */
router.get('/', auth.verifyToken, function (req, res, next) {
    res.json(users);
});


module.exports = router;
