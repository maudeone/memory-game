import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import characters from "./characters.json";
import "./App.css";

function App2() {
    const [characters, setCharacters] = useState([]);
    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [Clicked, setClicked] = useState(false);
  
  const handleClick = id => {
    shuffleArray();
    handleScore(id);
  };

  const handleScore = id => {
    characters.forEach(element => {
      if (id === element.id && element.clicked === false) {
        element.clicked = true;
        setClicked(false);
        handleIncrement();
      } else if (id === element.id && element.clicked === true) {
        if (currentScore > highScore) {
          setHighScore(currentScore);
        }
        setCurrentScore(0);
        setClicked(true);
        characters.forEach(element => (element.clicked = false));
      }
    });
  };

  const shuffleArray = () => {
    // Shuffle array of objects
    const shuffledArr = shuffle(characters);
    // Setting 'shuffledArr' as the new state
    setCharacters({ shuffledArr });
  };

  // handleIncrement increments this.state.currentScore by 1
  const handleIncrement = () => {
    // Using setState method to update component's state
    setCurrentScore(currentScore + 1);
  };

  // Function that takes an array as a parameter and shuffles it
  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

    return (
      <Wrapper>
        <Navbar
          currentScore={currentScore}
          highScore={highScore}
        />
        <Jumbotron />
        {characters.map(character => (
          <CharacterCard
            Clicked={Clicked}
            handleClick={handleClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
          />
        ))}
      </Wrapper>
    );
}

export default App2;