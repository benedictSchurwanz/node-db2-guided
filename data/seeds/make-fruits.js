exports.seed = function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { fruit_name: 'apple', avg_weight_oz: 2.5, delicious: 0 },
        { fruit_name: 'pear', avg_weight_oz: 2.5, delicious: 0 },
        { fruit_name: 'pineapple', avg_weight_oz: 2.5, delicious: 0 }
      ]);
    });
};
