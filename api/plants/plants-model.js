const db = require("../../data/dbConfig");

module.exports = {
  createPlant,
  updatePlant,
  deletePlant,
};

async function createPlant(data) {
  const id = await db("plants").insert(data);
  return db("plants").where("id", id).first();
}

function updatePlant(id, data) {
  return db("plants").where("id", id).update(data);
}

function deletePlant(id) {
  return db("plants").where("id", id).delete();
}
