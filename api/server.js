const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./users/users-router");
const plantsRouter = require("./plants/plants-router");
const path = require("path");
const data = require("./dummydata.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/dummydata", (req, res) => {
  res.status(200).json(data);
});
server.use("/users/", usersRouter);
server.use("/plants/", plantsRouter);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/documentation.html"));
});

module.exports = server;
