const express = require("express");
const router = express.Router();

const {
  getAllPlayers,
  createNewPlayer,
  updatedPlayerById,
} = require("../queries/players");

const { checkIfNotNull } = require("../validations/checkPlayers");

router.get("/", async (req, res) => {
  try {
    const allPlayers = await getAllPlayers();

    if (Array.isArray(allPlayers)) {
      res.json(allPlayers);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", checkIfNotNull, async (req, res) => {
  try {
    const createPlayer = await createNewPlayer(req.body);
    res.json(createPlayer);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", checkIfNotNull, async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const updatedPlayer = await updatedPlayerById(req.params.id, req.body);
    res.json(updatedPlayer);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
