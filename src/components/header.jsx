import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <header>
      <div className="headline" name="headline">
        Memory Cards Game
      </div>
      <div className="scores">
        <div>Current score: {props.currentScore}</div>
        <div>High score: {props.highScore}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number,
};
