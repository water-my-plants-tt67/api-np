const loginValidation = (req, res, next) => {
  const data = req.body;
  const username = Object.prototype.hasOwnProperty.call(data, "username");
  const password = Object.prototype.hasOwnProperty.call(data, "password");
  if (
    username === true &&
    password === true &&
    Object.keys(data).length === 2
  ) {
    next();
  } else {
    res.status(400).json({
      Message:
        "Data is not structured in a way that is usable for the API please read the documentation!",
    });
  }
};

module.exports = loginValidation;
