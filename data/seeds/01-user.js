exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "testUser",
          password:
            "$2a$10$SKVbkDjxoZhvj2giBKzVAOHLv8UEtOuUTuSEnEkrIq7V4d0WkEhtu",
          telephone: "5555555555",
        },
      ]);
    });
};
