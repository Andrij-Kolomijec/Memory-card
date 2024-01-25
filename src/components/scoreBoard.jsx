import { useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";

export default function ScoreBoard({ scores, setScores }) {
  useEffect(() => {
    Axios.get("https://memory-card-vycm.onrender.com/getScores").then(
      (response) => {
        setScores(response.data.sort((a, b) => b.score - a.score));
      },
    );
  }, []);

  return (
    <div className="score-board">
      <h3 style={{ textAlign: "center", marginBottom: "5px" }}>Score Board</h3>
      {scores.length > 0 ? (
        scores.map((score, index) => {
          return (
            <div key={uuidv4()}>
              <p>
                {index + 1}. {score.player} - {score.score}
              </p>
            </div>
          );
        })
      ) : (
        <>
          <div className="loader"></div>
          <p className="loader-text">
            Loading from a server
            <br />
            might take several minutes.
          </p>
        </>
      )}
    </div>
  );
}

ScoreBoard.propTypes = {
  scores: PropTypes.array,
  setScores: PropTypes.func,
};
