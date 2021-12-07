exports.up = async function(knex) {
  await knex.schema.createTable('fruits')
};

exports.down = async function(knex) {
  
};
