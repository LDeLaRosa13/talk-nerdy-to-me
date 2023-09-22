import FavoriteCard from "./FavoriteCard";
import './FavoritePhrases.css'
import React from 'react'
import PropTypes from 'prop-types'

function FavoritePhrases ({favePhrase, removeFavorite}) {
  const FavoritePhrasesContainer = favePhrase.map((phrase) => {
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

FavoritePhrases.propTypes = {
  favePhrase: PropTypes.array.isRequired,
  removeFavorite: PropTypes.func.isRequired
};