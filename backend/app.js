const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const playersController = require("./controllers/players.js");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/players", playersController);

app.get("/", (req, res) => {
  res.send("Welcome to Harlem TrotterVerse");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found! Go to homepage.");
});

module.exports = app;
