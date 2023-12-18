function generateUniqueNumbersArray() {
  const uniqueNumbers = [];
  while (uniqueNumbers.length < 25) {
    const randomNumber = Math.floor(Math.random() * (99 + 1));
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }
  return uniqueNumbers;
}

export default function Board(props) {
  const cardsList = generateUniqueNumbersArray().map((key) => (
    <div key={props.cards[key].id}>
      <img
        src={props.cards[key].src}
        id={props.cards[key].id}
        onClick={props.onClick}
      />
    </div>
  ));
  return <div className="board">{cardsList}</div>;
}
