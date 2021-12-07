
exports.up = function(knex) {
  return knex.schema.table('fruits', table => {
    table.string('color', 56)
  })
};

exports.down = function(knex) {
  return knex.schema.table('fruits', () => {
    table.dropColumn('color')
  })
};
