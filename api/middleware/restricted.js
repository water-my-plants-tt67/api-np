const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT || "OOGGGGIIIEEEE";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!req.headers.authorization) {
    res.status(401).json("token required");
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json("token invalid");
      } else {
        req.decodedToken = decoded;
        next();
      }
    });
  }
};
