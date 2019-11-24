const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          username: "testing",
          password: bcrypt.hashSync("testing"),
        }
      ]);
    });
};
