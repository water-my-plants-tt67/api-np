const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Plants up" });
});

router.get("/test", (req, res) => {
  res.status(200).json({ message: "getting git configured on new os" });
});

module.exports = router;
