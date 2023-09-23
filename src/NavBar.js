import { NavLink } from 'react-router-dom'
import './NavBar.css'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='button-container'>
        <NavLink to='/'>
        <button>Home</button>
        </NavLink>
        <NavLink to='/favorites'>
        <button>Favorites</button>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar