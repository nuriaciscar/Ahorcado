import { useState } from "react";
import "./App.css";
import Letter from "./components/Letter/Letter.js";
import KeyboardButton from "./components/Keyboard/KeyboardButton";

function App() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const wordList = ["pierna", "aguacate", "pizarra", "enciclopedia"];
  const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  const wordArray = randomWord.toUpperCase().split("");
  const [letterObjects, setLetterObjects] = useState(
    wordArray.map((letter, i) => ({
      position: i,
      letter: letter,
      key: letter,
      isGuessed: false,
    }))
  );

  //const [errorCounter, setErrorCounter] = useState(0);

  const [currentLetter, setCurrentLetter] = useState("");

  const guessedLetter = () =>
    setLetterObjects(
      letterObjects.map((letter) =>
        letter.letter === currentLetter
          ? { ...letter, isGuessed: true }
          : letter
      )
    );

  const changeCurrentLetter = (event) =>
    setCurrentLetter(event.target.textContent);

  const buttonFunction = (event) => {
    changeCurrentLetter(event);
    guessedLetter();
  };

  return (
    <>
      <section className="container">
        <div className="hangman-figure">
          {/* <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle
            className="stage6"
            cx="56"
            cy="34"
            r="6"
            fill="#bee5eb"
          ></circle>
          <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        </svg> */}
        </div>
        <div className="word">
          {letterObjects.map((letter, i) => (
            <Letter letter={letter} key={i} />
          ))}
        </div>

        <div className="keyboard">
          {alphabet.map((letter) => (
            <KeyboardButton
              text={letter}
              actionOnClick={(event) => buttonFunction(event)}
              key={letter}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
