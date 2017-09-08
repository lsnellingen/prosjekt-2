var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

router.get('/daniel/', function(req, res, next) {
    res.render('daniel-test');
});

module.exports = router;
