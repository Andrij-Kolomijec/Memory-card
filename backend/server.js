/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const HighScore = require("./scoreModel");
const cors = require("cors");
require("dotenv").config();

mongoose.set("strictQuery", false);

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const mongoDB = process.env.MONGODB_URI;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/getScores", async (req, res) => {
  try {
    const result = await HighScore.find().exec();
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/postScore", async (req, res) => {
  const score = req.body;
  const newScore = new HighScore(score);
  await newScore.save();

  res.json(score);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
