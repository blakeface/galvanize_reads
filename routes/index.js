var express = require('express');
var router = express.Router();
var knex = require('knex');

router.get('/', function(req, res, next) {
  res.render('index');
});

// authors
router.get('/authors', function(req, res, next) {
  knex('book_info')
  .then(function ( results ){
    console.log(results);
    res.render('authors', { author: results });
  })
});



// books

module.exports = router;
