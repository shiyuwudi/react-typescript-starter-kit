var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send({index: 1});
});

router.get('/asd', function (req, res) {
    res.send({asd: 1});
});


module.exports = router;
