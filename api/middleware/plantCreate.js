const plantCreation = (req, res, next) => {
  const data = req.body;
  const nickname = Object.prototype.hasOwnProperty.call(data, "nickname");
  const species = Object.prototype.hasOwnProperty.call(data, "species");
  const h2oFrequency = Object.prototype.hasOwnProperty.call(
    data,
    "h2oFrequency"
  );
  if (
    nickname === true &&
    species === true &&
    h2oFrequency === true &&
    Object.keys(data).length === 3
  ) {
    next();
  } else {
    res.status(400).json({
      Message:
        "Data is not structured in a way that is usable for the API please read the documentation!",
    });
  }
};

module.exports = plantCreation;
