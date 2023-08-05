const db = require("../db/dbConfig");

const getAllPlayers = async () => {
  try {
    const allPlayers = await db.any("SELECT * FROM active_roster");

    return allPlayers;
  } catch (error) {
    return error;
  }
};

const createNewPlayer = async (data) => {
  try {
    const createPlayer = await db.one(
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

    return createPlayer;
  } catch (error) {
    return error;
  }
};

const updatedPlayerById = async (id, data) => {
  try {
    console.log(id, data);
    const updatedPlayer = await db.one(
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
    return updatedPlayer;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllPlayers, createNewPlayer, updatedPlayerById };
