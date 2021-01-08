const db = require("../../data/dbConfig");

module.exports = {
  create,
  update,
  remove,
  getPlants,
  getByUsername,
};

async function create(data) {
  const a = await db("users").insert(data);
  return { Message: `User ${data.username} created!` };
}

async function update(id, data) {
  await db("users").where("id", id).update(data);
  return { Message: `User ${data.username} updated!` };
}

function remove(id) {
  return db("users").where("id", id).delete();
}

function getPlants(id) {
  return db("plants").where("userID", id);
}

function getByUsername(name) {
  return db("users").where("username", name);
}
