const db = require("../plants/plants-model");
const plantUpdate = (req, res, next) => {
  db.getById(req.params.id).then((data) => {
    if (data["userID"] === req.decodedToken.id) {
      next();
    } else {
      res.status(400).json({
        Message: "You are not authorized to modify or access this resource!",
      });
    }
  });
};

module.exports = plantUpdate;
