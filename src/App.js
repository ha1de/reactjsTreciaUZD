import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

export default function GuessGame() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts([]);
    setMessage("");
  };

  const handleGuess = (guess) => {
    if (guess < randomNumber) {
      setMessage("Bandyk didesnį ⬆️");
    } else if (guess > randomNumber) {
      setMessage("Bandyk mažesnį ⬇️");
    } else {
      setMessage("🎉 Teisingai! Spustelk 'Restart'");
    }
    setAttempts([...attempts, guess]);
  };

  return (
    <div>
      <h1>Skaičių spėjimo žaidimas</h1>
      <GuessForm onGuess={handleGuess} />
      <Message text={message} />
      <button onClick={resetGame}>🔄 Restart</button>

      {/* Bandymų istorijos sąrašas su scroll */}
      <div
        style={{
          maxHeight: "150px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <h3>Bandymų istorija:</h3>
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>
              Bandymas {index + 1}: {attempt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
