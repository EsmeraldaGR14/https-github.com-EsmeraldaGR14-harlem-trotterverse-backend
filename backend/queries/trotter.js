const db = require("../db/dbConfig");

const getAllTrotters = async () => {
  try {
    const allTrotters = await db.any("SELECT * FROM active_roster");

    return allTrotters;
  } catch (error) {
    return error;
  }
};

const getSingleTrotter = async (id) => {
  try {
    const singleTrotter = await db.any(
      "SELECT * FROM active_roster WHERE id = $1",
      id
    );

    return singleTrotter;
  } catch (error) {
    return error;
  }
};

const createNewTrotter = async (data) => {
  try {
    const createTrotter = await db.one(
      "INSERT INTO active_roster (position, height, nickname, lastname, hometown, almamater,jersey_number, bio, career_highlights, career_history, favorite_quote, hobbies) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *",
      [
        data.position,
        data.height,
        data.nickname,
        data.lastname,
        data.hometown,
        data.almamater,
        data.jersey_number,
        data.bio,
        data.career_highlights,
        data.career_history,
        data.favorite_quote,
        data.hobbies,
      ]
    );

    return createTrotter;
  } catch (error) {
    return error;
  }
};

const updatedTrotterById = async (id, data) => {
  try {
    console.log(id, data);
    const updatedTrotter = await db.one(
      "UPDATE active_roster SET position = $1, height = $2, nickname = $3 , lastname = $4, hometown = $5, almamater = $6,jersey_number = $7, bio = $8, career_highlights = $9, career_history = $10, favorite_quote = $11, hobbies = $12 WHERE id = $13 RETURNING *",
      [
        data.position,
        data.height,
        data.nickname,
        data.lastname,
        data.hometown,
        data.almamater,
        data.jersey_number,
        data.bio,
        data.career_highlights,
        data.career_history,
        data.favorite_quote,
        data.hobbies,
        id,
      ]
    );
    return updatedTrotter;
  } catch (error) {
    return error;
  }
};
const deleteTrotterById = async (id) => {
  try {
    const deleteTrotter = await db.one(
      "DELETE FROM active_roster WHERE id = $1 RETURNING *",
      id
    );
    return deleteTrotter;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTrotters,
  getSingleTrotter,
  createNewTrotter,
  updatedTrotterById,
  deleteTrotterById,
};
