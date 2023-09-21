import './FavoritePhrase.css'


function FavoritePhrase({ favePhrase }) {
  return(
    <div>
      <h2>Favorite Phrases</h2>
      <ul>
        {favePhrase.map((favorite) => {
          <li key={favorite.id}>
            {favorite.message}
          </li>
        })}
      </ul>
    </div>
  )
}

export default FavoritePhrase