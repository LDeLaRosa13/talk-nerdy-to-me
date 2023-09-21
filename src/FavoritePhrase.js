import './FavoritePhrase.css'


function FavoritePhrase({ favePhrase, removeFavorite }) {
  return(
    <div>
      <h2>Favorite Phrases</h2>
      <ul>
        {favePhrase.map((favorite) => {
          <li key={favorite.id}>
            <span>{favorite.message}</span>
            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default FavoritePhrase