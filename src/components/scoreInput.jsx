import { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

export default function ScoreInput({ score, onReset, scores, setScores }) {
  const [player, setPlayer] = useState("");
  const postScore = (e) => {
    e.preventDefault();
    onReset();
    Axios.post("http://localhost:3000/postScore", {
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
