export default function WinDialogWindow(props) {
  return (
    <>
      <dialog>
        <h1>Congratulations! You've won the game!</h1>
        <button onClick={props.onClick}>New Game</button>
      </dialog>
    </>
  );
}
