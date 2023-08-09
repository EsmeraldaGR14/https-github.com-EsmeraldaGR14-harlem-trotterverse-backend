const db = require("../db/dbConfig");

const getAllTrotterUsers = async () => {
  try {
    const allTrotterUsers = await db.any("SELECT * FROM user_trotter");
    return allTrotterUsers;
  } catch (error) {
    return error;
  }
};
const getUserTrotter = async (id) => {
  try {
    const usersTrotter = await db.one(
      "SELECT * FROM user_trotter WHERE id = $1",
      id
    );

    return usersTrotter;
  } catch (error) {
    return error;
  }
};

const createNewUserTrotter = async (data) => {
  try {
    const newUserTrotter = await db.one(
      "INSERT INTO user_trotter (skill, height, nickname, signature_move, lastname, jersey_number, profile_picture) VALUES ($1, $2, $3,$4, $5, $6, $7)",
      [
        data.skill,
        data.height,
        data.nickname,
        data.signature_move,
        data.lastname,
        data.jersey_number,
        data.profile_picture,
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
      "UPDATE user_trotter SET skill = $1, height = $2, nickname = $3, signature_move = $4, lastname = $5, jersey_number = $6, profile_picture = $7 WHERE id = $8 RETURNING *",
      [
        data.skill,
        data.height,
        data.nickname,
        data.signature_move,
        data.lastname,
        data.jersey_number,
        data.profile_picture,
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
      "DELETE FROM user_trotter WHERE id = $1 RETURNING *",
      id
    );
    return deletedUserTrotter;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllTrotterUsers,
  getUserTrotter,
  createNewUserTrotter,
  updateUserTrotter,
  deleteUserTrotter,
  getAllTrotterUsers,
};
