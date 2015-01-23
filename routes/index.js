var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login.html');
});

router.get('/main', function(req, res, next) {
  res.render('userList.html');
});

module.exports = router;
