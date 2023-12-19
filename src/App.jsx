import { useState, useEffect } from "react";
import "./styles/App.css";
import Cards from "./components/cards.js";
import Header from "./components/header.jsx";
import Board from "./components/board.jsx";
import WinDialogWindow from "./components/winDialogWindow.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const [cards, setCards] = useState(Cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    if (currentScore === 100) {
      document.querySelector("dialog").showModal();
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
        Object.keys(newCards).map((card) => ({
          ...newCards[card],
          clicked: false,
        })),
      );
      setCurrentScore(0);
    }
  }

  function handleWin() {
    const newCards = { ...cards };
    setCards(
      Object.keys(newCards).map((card) => ({
        ...newCards[card],
        clicked: false,
      })),
    );
    setCurrentScore(0);
    document.querySelector("dialog").close();
  }

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <Board onClick={handleClick} cards={cards} score={currentScore} />
      <WinDialogWindow onClick={handleWin} />
      <Footer />
    </>
  );
}

export default App;
