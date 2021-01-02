//checking
const dotenv = require("dotenv");
dotenv.config();
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};
const DB = process.env.DB;

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
    ...sharedConfig,
    connection: { filename: "./data/test.db3" },
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
