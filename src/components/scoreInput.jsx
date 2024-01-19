import { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

export default function ScoreInput({ score, onReset, scores, setScores }) {
  const [player, setPlayer] = useState("");
  const postScore = (e) => {
    e.preventDefault();
    if (player.trim() === "") return alert("Name field cannot be empty!");
    onReset();
    Axios.post("https://memory-card-vycm.onrender.com/postScore", {
      player,
      score: score,
      added: Date.now(),
    }).then((response) => {
      setScores(
        [...scores, { player, score: score }].sort((a, b) => b.score - a.score),
      );
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setPlayer(e.target.value)}
        required
      />
      <button onClick={postScore}>Submit Score</button>
    </form>
  );
}

ScoreInput.propTypes = {
  score: PropTypes.number,
  onReset: PropTypes.func,
  scores: PropTypes.array,
  setScores: PropTypes.func,
};
