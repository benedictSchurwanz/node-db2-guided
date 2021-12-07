exports.seed = function (knex) {
  // Truncating a table deletes ALL existing entries and resets the primary keys
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { colName: 'rowValue1' },
        { colName: 'rowValue2' },
        { colName: 'rowValue3' }
      ]);
    });
};
