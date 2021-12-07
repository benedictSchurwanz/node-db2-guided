exports.seed = function (knex) {
  // Truncating a table eletes ALL existing entries
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
