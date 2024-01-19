/* eslint-disable no-undef */
const mongoose = require("mongoose");

const HighScoreSchema = new mongoose.Schema(
  {
    player: { type: String, required: true, maxLength: 100 },
    score: Number,
    added: Date,
  },
  { versionKey: false },
);

module.exports = mongoose.model(
  "HighScore",
  HighScoreSchema,
  "Highscore-Memory-Card",
);
