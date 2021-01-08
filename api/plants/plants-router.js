const router = require("express").Router();
const restricted = require("../middleware/restricted");
const PlantsModel = require("./plants-model");
const plantUpdate = require("../middleware/plantUpdate");
const plantCreation = require("../middleware/plantCreate");

router.post("/", restricted, plantCreation, (req, res) => {
  const data = {
    userID: req.decodedToken.id,
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

router.put("/:id", restricted, plantUpdate, (req, res) => {
  PlantsModel.updatePlant(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.delete("/:id", restricted, plantUpdate, (req, res) => {
  PlantsModel.deletePlant(req.params.id).then((data) => {
    res.status(200).json("deleted");
  });
});

router.get("/:id", plantUpdate, (req, res) => {
  PlantsModel.getById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
