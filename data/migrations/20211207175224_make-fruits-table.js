exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
    // primary key
    table.increments('fruit_id') // defaults to 'id' if argument is omitted

    table.text('fruit_name', 128) // sqlite does not enforce the char limit VARCHAR(50)
      .unique()
      .notNullable()

    table.decimal('avg_weight_oz')
      .notNullable()

    table.boolean('delicious')
      .defaultTo(false)
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
}
