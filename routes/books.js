var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);;

router.get('/', function(req, res, next) {
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

router.get('/:id', function(req, res, next) {
  knex('books')
  .where({id: req.params.id})
  .innerJoin('authors', 'books.id', 'authors.book_id')
  .then(function ( results ){
    res.render('books', { books: results });
  })
});

router.get('/:id/edit', function(req, res, next) {
  knex('books')
  .where({id: req.params.id})
  .innerJoin('authors', 'books.id', 'authors.book_id')
  .then(function ( results ){
    res.render('edit-book', { book: results });
  })
});

router.post('/:id/update')

module.exports = router;
