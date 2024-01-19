import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import Cards from "./components/cards.js";
import Header from "./components/header.jsx";
import Board from "./components/board.jsx";
import ModalWindow from "./components/modalWindow.jsx";
import WelcomeModal from "./components/welcomeModal.jsx";
import Footer from "./components/footer.jsx";
import ScoreBoard from "./components/scoreBoard.jsx";

function App() {
  const [cards, setCards] = useState(Cards);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(
    +localStorage.getItem("storedHighScore") || 0,
  );
  const [scores, setScores] = useState([]);

  const gameEnded = useRef(false);
  const finalScore = useRef(0);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
      localStorage.setItem("storedHighScore", currentScore.toString());
    }
    if ((currentScore === 100 || currentScore === 0) && gameEnded.current) {
      document.querySelector(".modal").classList.remove("out");
    } else if (highScore === 0 && currentScore === 0) {
      // document.querySelector(".modal-welcome").style.display = "flex";
      document.querySelector(".modal-welcome").classList.remove("out");
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
      finalScore.current = currentScore;
      gameEnded.current = true;
      setCards(
        Object.keys(newCards).map((card) => ({
          ...newCards[card],
          clicked: false,
        })),
      );
      setCurrentScore(0);
    }
  }

  function handleResetGame() {
    const newCards = { ...cards };
    setCards(
      Object.keys(newCards).map((card) => ({
        ...newCards[card],
        clicked: false,
      })),
    );
    setCurrentScore(0);
    document.querySelector(".modal").classList.add("out");
    gameEnded.current = false;
  }

  return (
    <>
      <Header currentScore={currentScore} highScore={highScore} />
      <Board onClick={handleClick} cards={cards} score={currentScore} />
      <ScoreBoard scores={scores} setScores={setScores} />
      <ModalWindow
        onClick={handleResetGame}
        currentScore={currentScore}
        highScore={highScore}
        finalScore={finalScore}
        scores={scores}
        setScores={setScores}
      />
      <WelcomeModal />
      <Footer />
    </>
  );
}

export default App;
