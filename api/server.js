const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./users/users-router");
const plantsRouter = require("./plants/plants-router");
const path = require("path");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/users/", usersRouter);
server.use("/plants/", plantsRouter);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/documentation.html"));
});

module.exports = server;
