exports.seed = function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { name: 'apple', avg_weight_oz: 2.5, delicious: 1 },
        { name: 'pear', avg_weight_oz: 4.5, delicious: 1 },
        { name: 'pineapple', avg_weight_oz: 7.5, delicious: 0 }
      ]);
    });
};
