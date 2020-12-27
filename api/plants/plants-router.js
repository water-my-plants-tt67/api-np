const router = require("express").Router();
const restricted = require("../middleware/restricted");
const PlantsModel = require("./plants-model");

router.get("/", (req, res) => {
  res.status(200).json({ message: "Plants up" });
});

router.post("/", restricted, (req, res) => {
  const data = {
    "user-id": req.decodedToken.id,
    nickname: req.body.nickname,
    species: req.body.species,
    h2oFrequency: req.body.h2oFrequency,
  };
  PlantsModel.createPlant(data)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
