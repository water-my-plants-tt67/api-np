const db = require("../../data/dbConfig");

module.exports = {
  createPlant,
  updatePlant,
  deletePlant,
  getById,
};

async function createPlant(data) {
  await db("plants").insert(data);
  return `Plant created`;
}

async function updatePlant(id, data) {
  await db("plants").where("id", id).update(data);
  return db("plants").where("id", id).first();
}

function deletePlant(id) {
  return db("plants").where("id", id).delete();
}

function getById(id) {
  return db("plants").where("id", id).first();
}
