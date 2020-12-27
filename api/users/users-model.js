const db = require("../../data/dbConfig");

module.exports = {
  create,
  //   get,
  //   getById,
  //   getByUsername,
};

async function create(data) {
  const id = await db("users").insert(data);
  return db("users").where("id", id).first();
}
