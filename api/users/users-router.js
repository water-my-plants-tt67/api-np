const router = require("express").Router();
const UserModel = require("./users-model");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Users up" });
});

router.post("/", (req, res) => {
  UserModel.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
