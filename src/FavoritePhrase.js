import './FavoritePhrase.css'


const FavoritePhrase = (message) => {
  const newFavorite = {
    id: Date.now(),
    message: message
  }
setFavePhrase([...FavoritePhrase, newFavorite])
}

export default FavoritePhrase