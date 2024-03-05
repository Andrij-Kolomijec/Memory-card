import { useState } from "react";
import PropTypes from "prop-types";

export default function ScoreInput({ score, onReset, scores, setScores }) {
  const [player, setPlayer] = useState("");
  const postScore = (e) => {
    e.preventDefault();
    if (player.trim() === "") return alert("Name field cannot be empty!");
    onReset();

    async function sendScore() {
      const response = await fetch(import.meta.env.VITE_PORT_FIREBASE, {
        method: "POST",
        body: JSON.stringify({
          player,
          score,
          added: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error("Sending score failed.");
      }

      setScores(
        [...scores, { player, score: score }].sort((a, b) => b.score - a.score),
      );
    }

    sendScore();
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
