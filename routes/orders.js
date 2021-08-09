var express = require('express');
var router = express.Router();

/* Import model */
let orders = require('../models/orders');

/* Import middleware */
let auth = require('../middlewares/auth');

/* GET users listing. */
router.get('/', auth.verifyToken, function (req, res, next) {
    res.json(orders);
});


module.exports = router;
