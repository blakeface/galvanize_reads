
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('books', function ( table ){
    table.increments();
    table.string('title', 5000);
    table.string('genre');
    table.string('description', 5000);
    table.string('cover_url', 5000);
  })
  .createTable('authors', function ( table ){
    table.increments();
    table.string('first');
    table.string('last');
    table.string('bio', 5000);
    table.string('img_url', 1000);
  })
  .createTable('authors_books', function ( table ){
    table.increments();
    table.integer('book_id').unsigned().references('id').inTable('books');
    table.integer('author_id').unsigned().references('id').inTable('authors');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('authors_books')
  .dropTable('authors')
  .dropTable('books')
};
