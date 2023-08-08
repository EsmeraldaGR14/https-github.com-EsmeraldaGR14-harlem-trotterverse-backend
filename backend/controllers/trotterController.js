const express = require("express");
const router = express.Router();

const {
  getAllTrotters,
  getSingleTrotter,
  createNewTrotter,
  updatedTrotterById,
  deleteTrotterById,
} = require("../queries/trotter");

const { checkIfNotNull } = require("../validations/checkTrotters");

router.get("/", async (req, res) => {
  try {
    const allTrotters = await getAllTrotters();

    if (Array.isArray(allTrotters)) {
      res.json(allTrotters);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const singleTrotter = await getSingleTrotter(req.params.id);
    res.json(singleTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", checkIfNotNull, async (req, res) => {
  try {
    const createTrotter = await createNewTrotter(req.body);
    res.json(createTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put("/:id", checkIfNotNull, async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const updatedTrotter = await updatedTrotterById(req.params.id, req.body);
    res.json(updatedTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleteTrotter = await deleteTrotterById(req.params.id);
    res.json(deleteTrotter);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});
module.exports = router;
