const express = require("express");
const router = express.Router();

const {
  getUserTrotter,
  createNewUserTrotter,
  updateUserTrotter,
  deleteUserTrotter,
  getAllTrotterUsers,
} = require("../queries/userTrotter");

const { checkIfNotNull } = require("../validations/checkTrotters");

router.get("/", async (req, res) => {
  try {
    const allTrotterUsers = await getAllTrotterUsers();

    // if (Array.isArray(allTrotters)) {
    res.json(allTrotterUsers);
    // }
  } catch (error) {
    res.status(error.status).json({ error: error.status });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userTrotter = await getUserTrotter(req.params.id);
    res.json(userTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUserTrotter = await createNewUserTrotter(req.body);
    res.json(newUserTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUserTrotter = await updateUserTrotter(req.params.id, req.body);
    res.json(updatedUserTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUserTrotter = await deleteUserTrotter(req.params.id);
    res.json(deletedUserTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
