const passwordUpdateValidation = (req, res, next) => {
  const data = req.body;
  const password = Object.prototype.hasOwnProperty.call(data, "password");
  if (password === true && Object.keys(data).length === 1) {
    next();
  } else {
    res.status(400).json({
      Message:
        "Data is not structured in a way that is usable for the API please read the documentation!",
    });
  }
};

module.exports = passwordUpdateValidation;
