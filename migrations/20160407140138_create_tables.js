
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
    table.increments('authors_id');
    table.string('first');
    table.string('last');
    table.string('bio', 5000);
    table.string('img_url', 1000);
    table.integer('book_id').references('id').inTable('books');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('authors')
  .dropTable('books')
};
