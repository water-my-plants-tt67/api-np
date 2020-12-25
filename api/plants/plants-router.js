const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Plants up" });
});

module.exports = router;
