const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./users/users-router");
const plantsRouter = require("./plants/plants-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/users/", usersRouter);
server.use("/plants/", plantsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API UP" });
});

module.exports = server;
