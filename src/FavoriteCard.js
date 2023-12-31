import './FavoriteCard.css'
import React from 'react'
import PropTypes from 'prop-types'

function FavoriteCard({ phrase, removeFavorite }) {
  return(
    <div className='fave-card-container'>
      <div className='fave-card' key={phrase.id}>
        <p>{phrase.message}</p>
        <button onClick={(e) => removeFavorite(e, phrase.id)}>Remove</button>
      </div>
    </div>
  )
}

export default FavoriteCard

FavoriteCard.propTypes = {
  phrase: PropTypes.object.isRequired,
  removeFavorite: PropTypes.func.isRequired
}