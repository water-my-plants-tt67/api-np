exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          id: 1,
          nickname: "bill",
          species: "fern",
          h2oFrequency: "daily",
          userID: 1,
        },
      ]);
    });
};
