const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  //   const AllPlayers = await getAllPlayers();

  //   res.json(AllPlayers);
  res.send("im in");
});

module.exports = router;
