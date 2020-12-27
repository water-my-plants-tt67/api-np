const db = require("../../data/dbConfig");

module.exports = {
  create,
  update,
  remove,
  getPlants,
  getByUsername,
};

async function create(data) {
  const id = await db("users").insert(data);
  return db("users").where("id", id).first();
}

async function update(id, data) {
  await db("users").where("id", id).update(data);
  return db("users").where("id", id).first();
}

function remove(id) {
  return db("users").where("id", id).delete();
}

function getPlants(id) {
  return db("plants").where("user-id", id);
}

function getByUsername(name) {
  return db("users").where("username", name);
}
