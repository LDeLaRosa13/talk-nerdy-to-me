import { NavLink } from 'react-router-dom'
import './NavBar.css'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='button-container'>
        <div className='home-button'>
          <NavLink to='/'>
          <button className='ran-home'>Home</button>
          </NavLink>
        </div>
        <div className='favorite-button'>
          <NavLink to='/favorites'>
          <button className='ran-fave'>Favorites <span role='img' aria-label='black heart'>🖤</span></button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar