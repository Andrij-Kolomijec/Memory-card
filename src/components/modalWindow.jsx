import PropTypes from "prop-types";

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
};
