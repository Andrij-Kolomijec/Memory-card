import PropTypes from "prop-types";
import ScoreInput from "./scoreInput.jsx";

export default function ModalWindow(props) {
  return (
    <>
      <dialog className="modal out">
        <div>
          <h1>
            {props.currentScore === 100
              ? "Congratulations! You've beaten the game"
              : `Game over! Your score is ${props.finalScore.current}.`}
          </h1>
          <ScoreInput
            score={props.finalScore.current}
            onReset={props.onClick}
            scores={props.scores}
            setScores={props.setScores}
          />
          <button onClick={props.onClick}>New Game</button>
        </div>
      </dialog>
    </>
  );
}

ModalWindow.propTypes = {
  finalScore: PropTypes.object,
  currentScore: PropTypes.number,
  onClick: PropTypes.func,
  scores: PropTypes.array,
  setScores: PropTypes.func,
};
