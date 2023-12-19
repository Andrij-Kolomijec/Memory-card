export default function ModalWindow(props) {
  return (
    <>
      <dialog className="modal">
        <div>
          <h1>
            {props.currentScore === 100
              ? "Congratulations! You've beaten the game"
              : props.currentScore === 0 && props.highScore !== 0
                ? "You loose!"
                : "Don't click on the same card twice!"}
          </h1>
          <button onClick={props.onClick}>New Game</button>
        </div>
      </dialog>
    </>
  );
}
