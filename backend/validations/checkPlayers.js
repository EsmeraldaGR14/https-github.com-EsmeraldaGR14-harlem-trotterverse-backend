// write a middleware that checks if position, nickname, height, lastname, bio cannot be empty

const checkIfNotNull = (req, res, next) => {
  try {
    const fields = ["position", "nickname", "height", "lastname", "bio"];
    const emptyFields = fields.filter((field) => !req.body[field]);

    if (emptyFields.length > 0) {
      throw {
        error: `Value for ${emptyFields.join(", ")} cannot be empty`,
        status: 400,
      };
    } else {
      next();
    }
  } catch (error) {
    res.status(error.status).json({ error: error.error });
  }
};

module.exports = { checkIfNotNull };
