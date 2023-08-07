const db = require("../db/dbConfig");

const getUserPlayer = async (id) => {
  try {
    const usersPlayer = await db.one(
      "SELECT * FROM user_player WHERE id = $1",
      id
    );

    return usersPlayer;
  } catch (error) {}
};

const createNewUserPlayer = async (data) => {
  try {
    const newUserPlayer = await db.one(
      "INSERT INTO user_player (height, position, nickname, lastname, jersey_number) VALUES ($1, $2, $3,$4, $5)",
      [
        data.height,
        data.position,
        data.nickname,
        data.lastname,
        data.jersey_number,
      ]
    );
    return newUserPlayer;
  } catch (error) {
    return error;
  }
};

const updateUserPlayer = async (id, data) => {
  try {
    const updatedData = await db.one(
      "UPDATE user_player SET height = $1, position = $2, nickname = $3, lastname = $4, jersey_number = $5 WHERE id = $6 RETURNING *",
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

const deleteUserPlayer = async (id) => {
  try {
    const deletedUserPlayer = await db.one(
      "DELETE FROM user_player WHERE id = $1 RETURNING *",
      id
    );
    return deletedUserPlayer;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getUserPlayer,
  createNewUserPlayer,
  updateUserPlayer,
  deleteUserPlayer,
};
