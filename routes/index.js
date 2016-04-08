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
  var data = {};

  knex('authors')
  // .innerJoin('authors', 'books.id', 'authors.book_id')
  // .select('*').from('authors')
  // .groupBy('book_id').having('book_id', '>', 1)
  .then(function ( results ){
    var uniq = [];
    var dup = [];
    for (var i = 0; i < results.length; i++) {
      for (var j = 0; j < results.length; j++) {
        if ( results[i].book_id != results[j].book_id ){
          uniq.push(results[i].first + " " + results[i].last);
        } else {
          dup.push(results[i].first + " " + results[i].last);
        }
      }
    };
    // for (var i = 0; i < bookIdArr.length; i++) {
    //   if ( bookIdArr[i + 1] != bookIdArr[i] )
    //     uniq.push(bookIdArr[i])
    // }
    // console.log(uniq);
    // console.log(nonduplicates);
  })
  // .then(function ( book_id ){
  // knex('books')
  // console.log( book_id );
  //   .then(function ( results ){
  //     res.render('books', { books: results });
  //   })
  // })
});

router.get('/books/:id', function(req, res, next) {
  knex('books')
  .where({id: req.params.id})
  .innerJoin('authors', 'books.id', 'authors.book_id')
  .then(function ( results ){
    res.render('books', { books: results });
  })
});

router.get('/books/:id/edit', function(req, res, next) {
  knex('books')
  .where({id: req.params.id})
  .innerJoin('authors', 'books.id', 'authors.book_id')
  .then(function ( results ){
    res.render('edit-book', { book: results });
  })
});

router.post('/books/:id/update')

module.exports = router;
