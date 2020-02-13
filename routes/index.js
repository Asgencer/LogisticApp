var express = require('express');
var router = express.Router();

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Ana Sayfa' });
});

// GET /about
router.get('/delivery', function(req, res, next) {
  return res.render('delivery', { title: 'Teslimat' });
});

// GET /contact
router.get('/management', function(req, res, next) {
  return res.render('management', { title: 'Management' });
});

module.exports = router;
