export default function Header(props) {
  return (
    <header>
      <div id="headline" name="headline">
        Memory Cards Game
      </div>
      <div className="current-score">Current score: {props.currentScore}</div>
      <div className="high-score">High score: {props.highScore}</div>
    </header>
  );
}
