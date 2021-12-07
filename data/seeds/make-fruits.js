exports.seed = function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  return knex('fruits').truncate()
    .then(function () {
      return knex('fruits').insert([
        { fruit_name: 'apple' },
        { fruit_name: 'apple' },
        { fruit_name: 'apple' }
      ]);
    });
};
