var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/aboutUs', function (req, res, next) {
    res.render('aboutUs', {title: 'Express'});
});

router.get('/blog', function (req, res, next) {
    res.render('blog', {title: 'Express'});
});

router.get('/media', function (req, res, next) {
    res.render('media', {title: 'Express'});
});

router.get('/portfolio', function (req, res, next) {
    res.render('portfolio', {title: 'Express'});
});

router.get('/recruitment', function (req, res, next) {
    res.render('recruitment', {title: 'Express'});
});

router.get('/unitStructure', function (req, res, next) {
    res.render('unitStructure', {title: 'Express'});
});

module.exports = router;
