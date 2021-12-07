exports.seed = async function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { fruit_name: 'apple', avg_weight_oz: 2.5, delicious: 1 },
    { fruit_name: 'pear', avg_weight_oz: 4.5, delicious: 1 },
    { fruit_name: 'pineapple', avg_weight_oz: 7.5, delicious: 0 }
  ]);
};
