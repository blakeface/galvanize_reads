var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);;

router.get('/', function(req, res, next) {
  res.render('index');
});

// authors
router.get('/authors', function(req, res, next) {
  knex('authors')
  .innerJoin('books', 'authors.book_id', 'books.id')
  .then(function ( results ){
    res.render('authors', { author: results });
  })
});

router.get('/authors/:id', function(req, res, next) {
  knex('authors')
  .where({authors_id: req.params.id})
  .innerJoin('books', 'authors.book_id', 'books.id')
  .then(function ( results ){
    res.render('authors', { author: results });
  })
});

router.get('/authors/:id/edit', function(req, res, next) {
  knex('authors')
  .where({authors_id: req.params.id})
  .innerJoin('books', 'authors.book_id', 'books.id')
  .then(function ( results ){
    console.log(results[0]);
    res.render('edit_author', { author: results[0] });
  })
});



// books
router.get('/books', function(req, res, next) {
  knex('books')
  .innerJoin('authors', 'books.id', 'authors.book_id')
  .then(function ( results ){
    res.render('books', { books: results });
  })
});

router.get('/books/:id', function(req, res, next) {
  knex('books')
  .where({id: req.params.id})
  .then(function ( results ){
    res.render('books', { books: results });
  })
});

module.exports = router;
