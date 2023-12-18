import { useState, useEffect } from "react";
import "./styles/App.css";
import Cards from "./components/cards.js";
import svgFileNames from "./components/svgFileNames.js";
import Header from "./components/header.jsx";
import Board from "./components/board.jsx";

function App() {
  const [cards, setCards] = useState(Cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore]);

  function handleClick(e) {
    const { id } = e.target;
    const newCards = { ...cards };
    if (cards[id].clicked === false) {
      newCards[id] = { ...newCards[id], clicked: true };
      setCards(newCards);
      setCurrentScore(currentScore + 1);
    } else {
      setCards(
        Object.keys(newCards).map((key) => ({
          ...newCards[key],
          clicked: false,
        })),
      );
      setCurrentScore(0);
    }
  }

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <Board onClick={handleClick} cards={cards} />
    </>
  );
}

export default App;
