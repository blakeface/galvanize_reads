var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);;


// router.get('/', function(req, res, next) {
//   knex('authors')
//   .innerJoin('authors_books', 'authors.id', 'authors_books.author_id')
//   .innerJoin('books', 'books.id', 'authors_books.book_id')
//   .reduce(function (author_id, obj){
//     author_id.duplicates.push(obj.author_id);
//     return author_id;
//   }, {duplicates: []})
//   .then(function ( results ){
//     console.log( "results: ", results );
//     res.render('authors', { author: results });
//   }).catch(function ( err ){
//     console.log( "err: ", err );
//   })
// });

router.get('/', function(req, res, next) {
  knex('authors').reduce(function ( result, author ){
    return knex('books')
    .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
    .where({author_id: author.id})
    .reduce(function ( books, book ){
      books.push(book);
      return books;
    }, [] ).then(function ( books ){
      author.books = books;
      result.push(author);
      return result;
    })

  }, []).then(function ( results ){
    res.render('authors', { author: results })
  })
})


router.get('/:id', function(req, res, next) {
  knex('authors')
  .where({authors_id: req.params.id})
  .innerJoin('books', 'authors.book_id', 'books.id')
  .then(function ( results ){
    res.render('authors', { author: results });
  })
});

router.get('/:id/edit', function(req, res, next) {
  knex('authors')
  .where({authors_id: req.params.id})
  .innerJoin('books', 'authors.book_id', 'books.id')
  .then(function ( results ){
    console.log(results[0]);
    res.render('edit_author', { author: results[0] });
  })
});

module.exports = router;
