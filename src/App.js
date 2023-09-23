import "./App.css";
import { getPhrase } from "./apicalls";
import React, { useState, useEffect } from "react";
import FavoritePhrases from "./FavoritePhrasesContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [phraseData, setPhraseData] = useState("");
  const [favePhrase, setFavePhrase] = useState([]);
  const [nextPhrase, setNextPhrase] = useState(0);

  useEffect(() => {
    getPhrase()
      .then((data) => {
        setPhraseData(data);
      })
      .catch((error) => {
        console.log('errorahhhhh', error)
        setPhraseData({
          message: 'Sorry! We could not find any phrases!',
        });
      });
  }, [nextPhrase]);

  const addToFavorites = (message) => {
    const newFavorite = {
      id: Date.now(),
      message: message,
    };
    setFavePhrase([...favePhrase, newFavorite]);
    setNextPhrase(nextPhrase + 1)
  };

  const removeFavorite = (e, id) => {
    e.preventDefault();
    const updatedFavorites = favePhrase.filter(
      (favorite) => favorite.id !== id
    );
    setFavePhrase(updatedFavorites);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              {phraseData ? (
                <div className="phrase-card">
                  <p className="phrase">{phraseData.message}</p>
                  <div className="next-fave-container">
                    <button className="fave-button" onClick={() => addToFavorites(phraseData.message)}>
                      Add To Favorites<span role='img' aria-label='white heart'>🤍</span>
                    </button>
                    <button className="next-button" onClick={() => setNextPhrase(nextPhrase + 1)}>
                      Next Phrase <span role='img' aria-label='arrow pointing to the right'>→</span>
                    </button>
                  </div> 
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePhrases
              favePhrase={favePhrase}
              removeFavorite={removeFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
