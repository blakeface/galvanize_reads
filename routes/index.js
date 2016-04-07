var express = require('express');
var router = express.Router();
var knex = require('knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/authors', function(req, res, next) {
  // knex('book_info')
  res.render('authors');
});

module.exports = router;
