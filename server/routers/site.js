/**
 * Created by olunx on 2016/10/10.
 */
var router = require('express').Router();
var AV = require('leanengine');

router.get('/', function (req, res) {
    res.render('index.html');
});

module.exports = router;