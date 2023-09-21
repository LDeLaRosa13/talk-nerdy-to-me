import './App.css';
import { getPhrase } from './apicalls';
import { useState, useEffect } from 'react';
import  FavoritePhrase  from './FavoritePhrase'


function App() {
const [phraseData, setPhraseData] = useState('')
const [favePhrase, setFavePhrase] = useState([])


useEffect(() => {
  getPhrase()
  .then(data => {
    // console.log('data', data)
    setPhraseData(data)
  })
  .catch(error => {
    console.log('Error fetching data', error)
  })
}, [])

const addToFavorites = (message) => {
  const newFavorite = {
    id: Date.now(),
    message: message
  }
  setFavePhrase([...favePhrase, newFavorite])
  console.log('newFave', newFavorite)
}

const removeFavorite = (id) => {
  const updatedFavorites = favePhrase.filter((favorite) => favorite.id !== id)
  setFavePhrase(updatedFavorites)
}

  return (
    <div>
      {phraseData ? (
        <div>
          <p>{phraseData.message}</p>
          <button onClick={() => addToFavorites(phraseData.message)}>Add To Favorites</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <FavoritePhrase favePhrase={favePhrase} removeFavorite={removeFavorite}/>
      </div>
    </div>
  );
}

export default App;
