
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_info', function ( table ){
    table.increments();
    table.string('title', 5000);
    table.string('genre', 5000);
    table.string('description', 5000);
    table.string('cover_url', 5000);
    table.string('author_1_first', 5000);
    table.string('author_1_last', 5000);
    table.string('author_1_bio', 5000);
    table.string('author_1_img_url', 5000);
    table.string('author_2_first', 5000);
    table.string('author_2_last', 5000);
    table.string('author_2_bio', 5000);
    table.string('author_2_img_url', 5000);
    table.string('author_3_first', 5000);
    table.string('author_3_last', 5000);
    table.string('author_3_bio', 5000);
    table.string('author_3_img_url', 5000);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book_info')
};
