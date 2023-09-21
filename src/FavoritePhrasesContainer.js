import FavoriteCard from "./FavoriteCard";
import './FavoritePhrases.css'

function FavoritePhrases ({favePhrase, removeFavorite}) {
  const FavoritePhrasesContainer = favePhrase?.map((phrase) => {
    return <FavoriteCard
      key={phrase.id}
      phrase={phrase}
      removeFavorite={removeFavorite}
    />
  }) 
  return (
    <section className='favorite-phrases-container'>
      {FavoritePhrasesContainer}
    </section>
  )

}

export default FavoritePhrases