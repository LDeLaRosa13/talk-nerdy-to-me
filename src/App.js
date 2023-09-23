import "./App.css";
import { getPhrase } from "./apicalls";
import React, { useState, useEffect } from "react";
import FavoritePhrases from "./FavoritePhrasesContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Error from "./Error";

function App() {
  const [phraseData, setPhraseData] = useState("");
  const [favePhrase, setFavePhrase] = useState([]);
  const [nextPhrase, setNextPhrase] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    getPhrase()
      .then((data) => {
        setPhraseData(data);
      })
      .catch((error) => {
        console.log("errorahhhhh", error);
        setPhraseData({
          message: "Sorry! We could not find any phrases!",
        });
      });
  }, [nextPhrase]);

  const addToFavorites = (message) => {
    const newFavorite = {
      id: Date.now(),
      message: message,
    };
    setFavePhrase([...favePhrase, newFavorite]);
    setNextPhrase(nextPhrase + 1);
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
                  <p>{phraseData.message}</p>
                  <button onClick={() => addToFavorites(phraseData.message)}>
                    Add To Favorites
                  </button>
                  <button onClick={() => setNextPhrase(nextPhrase + 1)}>
                    Next
                  </button>
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
        <Route path="*" element={<Error error={error} />} />
      </Routes>
    </div>
  );
}

export default App;
