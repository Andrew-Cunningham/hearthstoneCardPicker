exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('cards').del()
      .then(function () {
        // Inserts seed entries
        return knex('cards').insert([
          {mana: '1', attack:"2", health:'5', description:"A long time ago..."}
        ]);
      });
  };

  