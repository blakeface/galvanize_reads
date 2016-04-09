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

router.get('/add', function(req, res, next){
  knex('authors').then(function (results){
    res.render('new-book', { authors: results })
  })
})

router.post('/new', function(req, res, next){
  knex('books').insert({
    title: req.body.title,
    genre: req.body.genre,
    cover_url: req.body.cover_url,
    description: req.body.description
  })
  .then(function (results){
    res.redirect('/books')
  })
})

router.get('/:id/delete', function(req, res, next){
  knex('authors_books')
  .where({ book_id: req.params.id }).del()
  .then( function ( books ){
    knex('books')
    .where({id: req.params.id}).del()
    .then(function (results){
      res.redirect('/books')
    })
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

router.post('/:id', function ( req, res, next ){
  knex('books').where({id: req.params.id})
  .innerJoin('authors_books', 'books.id', 'authors_books.book_id')
  .innerJoin('authors', 'authors.id', 'authors_books.author_id')
  .update({
    title: req.body.title,
    genre: req.body.genre,
    cover_url: req.body.cover_url,
    description: req.body.description
  }).then(function ( results ){
    res.redirect('/books');
  })
});

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
