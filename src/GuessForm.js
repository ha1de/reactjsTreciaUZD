import React, { useState } from "react";

export default function GuessForm({ onGuess }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(guess, 10);
    if (!isNaN(num) && num >= 1 && num <= 100) {
      onGuess(num);
    } else {
      alert("Įveskite skaičių nuo 1 iki 100!");
    }
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Įveskite skaičių 1-100"
      />
      <button type="submit">Spėti</button>
    </form>
  );
}
