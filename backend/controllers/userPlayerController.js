const express = require("express");
const router = express.Router();

const {
  getUserPlayer,
  createNewUserPlayer,
  updateUserPlayer,
  deleteUserPlayer,
} = require("../queries/userPlayer");

const { checkIfNotNull } = require("../validations/checkPlayers");

// router.get("/", async (req, res) => {
//   try {
//   } catch (error) {
//     res.status(error.status).json({ error: error.status });
//   }
// });

router.get("/:id", async (req, res) => {
  try {
    const userPlayer = await getUserPlayer();
    res.json(userPlayer);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", checkIfNotNull, async (req, res) => {
  try {
    const newUserPlayer = await createNewUserPlayer();
    res.json(newUserPlayer);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", checkIfNotNull, async (req, res) => {
  try {
    const updatedUserPlayer = await updateUserPlayer();
    res.json(updatedUserPlayer);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUserPlayer = await deleteUserPlayer();
    res.json(deletedUserPlayer);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
