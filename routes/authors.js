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
    res.render('edit-author', { author: results });
  })
});

router.post('/:id', function(req, res, next) {
  knex('authors').where({id: req.params.id})
  .innerJoin('authors_books', 'authors.id', 'authors_books.author_id')
  .innerJoin('books', 'books.id', 'authors_books.book_id')
  .update({
    first: req.body.first,
    last: req.body.last,
    img_url: req.body.img_url,
    bio: req.body.bio
  }).then(function ( results ){
    res.redirect('/authors');
  })
});

module.exports = router;
