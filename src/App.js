import './App.css';
import { getPhrase } from './apicalls';
import { useState, useEffect } from 'react';
import  FavoriteCard  from './FavoriteCard'
import FavoritePhrases from './FavoritePhrasesContainer';
// import {Router, Route} from "react-browser-router";
import NavBar from './NavBar';


function App() {
const [phraseData, setPhraseData] = useState('')
const [favePhrase, setFavePhrase] = useState([])
const [nextPhrase, setNextPhrase] = useState(0)


useEffect(() => {
  getPhrase()
  .then(data => {
    setPhraseData(data)
  })
  .catch(error => {
    console.log('Error fetching data', error)
  })
}, [nextPhrase])

const addToFavorites = (message) => {
  const newFavorite = {
    id: Date.now(),
    message: message
  }
  setFavePhrase([...favePhrase, newFavorite])
  console.log('newFave', newFavorite)
}

const removeFavorite = (e, id) => {
  e.preventDefault()
  console.log(id, favePhrase)
  const updatedFavorites = favePhrase.filter((favorite) => favorite.id !== id)
  setFavePhrase(updatedFavorites)
}

  return (
   <div> 
    <NavBar />
    <div className='App'>
      {phraseData ? (
        <div className='phrase-card'>
          <p>{phraseData.message}</p>
          <button onClick={() => addToFavorites(phraseData.message)}>Add To Favorites</button>
          <button onClick={() => setNextPhrase(nextPhrase + 1)}>Next</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className='App'>
        {favePhrase && <FavoritePhrases favePhrase={favePhrase} removeFavorite={removeFavorite}/>}
      </div>
    </div>
  </div>
  );
}

export default App;
