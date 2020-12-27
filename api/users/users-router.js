const router = require("express").Router();
const UserModel = require("./users-model");
const restricted = require("../middleware/restricted");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "piggie";

router.get("/", (req, res) => {
  UserModel.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});
router.get("/plants", restricted, (req, res) => {
  console.log(req.decodedToken);
  UserModel.getPlants(req.decodedToken.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.get("/:id", (req, res) => {
  UserModel.getById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.delete("/:id", (req, res) => {
  UserModel.remove(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.post("/register", (req, res) => {
  const credentials = req.body;

  const hash = bcryptjs.hashSync(credentials.password, 10);
  credentials.password = hash;

  UserModel.create(credentials)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.post("/login", (req, res) => {
  UserModel.getByUsername(req.body.username)
    .then((user) => {
      if (bcryptjs.compareSync(req.body.password, user[0].password)) {
        const token = makeToken(user[0]);
        res.status(200).json({
          message: "Welcome to our API, " + user[0].username,
          token,
        });
      } else {
        res.status(401).json("invalid credentials");
      }
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  UserModel.update(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

function makeToken(user) {
  // we use a lib called jsonwebtoken
  const payload = {
    id: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "900s",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
