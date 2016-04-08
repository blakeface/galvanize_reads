var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);;

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
    res.render('authors', { authors: results })
  })
})

router.get('/:id', function(req, res, next) {
  knex('authors').where({id: req.params.id})
  .reduce(function ( result, author ){
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
    res.render('authors', { authors: results })
  })
})

router.get('/:id/edit', function(req, res, next) {
  knex('authors')
  .where({authors_id: req.params.id})
  .innerJoin('books', 'authors.book_id', 'books.id')
  .then(function ( results ){
    res.render('edit_author', { authors: results[0] });
  })
});

module.exports = router;
