import './FavoriteCard.css'
import React from 'react'

function FavoriteCard({ phrase, removeFavorite }) {
  console.log(phrase, "phrase")
  return(
    <div key={phrase.id}>
            <p>{phrase.message}</p>
            <button onClick={(e) => removeFavorite(e, phrase.id)}>Remove</button>
    </div>
  )
}

export default FavoriteCard