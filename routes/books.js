var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')['development']);;

router.get('/', function(req, res, next) {
  knex('books').reduce(function ( result, book ){
    return knex('authors')
    .innerJoin('authors_books', 'authors.id', 'authors_books.author_id')
    .where({book_id: book.id})
    .reduce(function ( authors, author ){
      authors.push(author);
      return authors;
    }, [] ).then(function ( authors ){
      book.authors = authors;
      result.push(book);
      return result;
    })

  }, []).then(function ( results ){
    res.render('books', { books: results })
  })
})

router.get('/:id', function(req, res, next) {
  knex('books').where({id: req.params.id})
  .reduce(function ( result, book ){
    return knex('authors')
    .innerJoin('authors_books', 'authors.id', 'authors_books.author_id')
    .where({book_id: book.id})
    .reduce(function ( authors, author ){
      authors.push(author);
      return authors;
    }, [] ).then(function ( authors ){
      book.authors = authors;
      result.push(book);
      return result;
    })
  }, [] ).then(function ( results ){
    res.render('books', { books: results })
  })
})

router.get('/:id/edit', function(req, res, next) {
  knex('books').where({id: req.params.id})
  .reduce(function ( result, book ){
    return knex('authors')
    .innerJoin('authors_books', 'authors.id', 'authors_books.author_id')
    .where({book_id: book.id})
    .reduce(function ( authors, author ){
      authors.push(author);
      return authors;
    }, [] ).then(function ( authors ){
      book.authors = authors;
      result.push(book);
      return result;
    })
  }, [] ).then(function ( results ){
    res.render('edit-book', { book: results });
  })
});

router.post('/:id/update')

module.exports = router;
