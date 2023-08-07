const db = require("../db/dbConfig");

const getUserTrotter = async (id) => {
  try {
    const usersTrotter = await db.one(
      "SELECT * FROM user_Trotter WHERE id = $1",
      id
    );

    return usersTrotter;
  } catch (error) {}
};

const createNewUserTrotter = async (data) => {
  try {
    const newUserTrotter = await db.one(
      "INSERT INTO user_Trotter (height, position, nickname, lastname, jersey_number) VALUES ($1, $2, $3,$4, $5)",
      [
        data.height,
        data.position,
        data.nickname,
        data.lastname,
        data.jersey_number,
      ]
    );
    return newUserTrotter;
  } catch (error) {
    return error;
  }
};

const updateUserTrotter = async (id, data) => {
  try {
    const updatedData = await db.one(
      "UPDATE user_Trotter SET height = $1, position = $2, nickname = $3, lastname = $4, jersey_number = $5 WHERE id = $6 RETURNING *",
      [
        data.height,
        data.position,
        data.nickname,
        data.lastname,
        data.jersey_number,
        id,
      ]
    );

    return updatedData;
  } catch (error) {
    return error;
  }
};

const deleteUserTrotter = async (id) => {
  try {
    const deletedUserTrotter = await db.one(
      "DELETE FROM user_Trotter WHERE id = $1 RETURNING *",
      id
    );
    return deletedUserTrotter;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getUserTrotter,
  createNewUserTrotter,
  updateUserTrotter,
  deleteUserTrotter,
};
