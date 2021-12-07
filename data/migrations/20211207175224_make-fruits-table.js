exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    // primary key
    table.increments('fruit_id') // defaults to 'id' if omitted
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
}
