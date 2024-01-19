import PropTypes from "prop-types";

export default function Board(props) {
  function generateUniqueNumbersArray() {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < 25) {
      const randomNumber = Math.floor(Math.random() * (99 + 1));
      if (!uniqueNumbers.includes(randomNumber)) {
        uniqueNumbers.push(randomNumber);
      }
    }
    if (
      uniqueNumbers.every((number) => props.cards[number].clicked) &&
      props.score < 100
    ) {
      return generateUniqueNumbersArray();
    } else {
      return uniqueNumbers;
    }
  }

  let uniqueNumbersArray = generateUniqueNumbersArray();
  const cardsList = uniqueNumbersArray.map((number) => (
    <div key={props.cards[number].id}>
      <img
        draggable={false}
        src={props.cards[number].src}
        id={props.cards[number].id}
        onClick={props.onClick}
        // className={props.cards[number].clicked ? "red" : ""}
        style={{
          filter: `invert(${Math.floor(
            Math.random() * 70,
          )}%) sepia(${Math.floor(Math.random() * 100)}%) saturate(${Math.floor(
            Math.random() * 2000,
          )}%) hue-rotate(${Math.floor(
            Math.random() * 360,
          )}deg) brightness(100%) contrast(100%)`,
        }}
      />
    </div>
  ));
  return <div className="board">{cardsList}</div>;
}

Board.propTypes = {
  score: PropTypes.number,
  cards: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  clicked: PropTypes.bool,
  onClick: PropTypes.func,
};
