//checking
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;
const TDB = process.env.TestingDB;

module.exports = {
  development: {
    client: "pg",
    connection: DB,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  testing: {
    client: "pg",
    connection: TDB,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
  production: {
    client: "pg",
    connection: DB,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },
};
