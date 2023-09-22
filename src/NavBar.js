import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar' style={{backgroundColor: 'white'}}>
      <div className='button'>
        <button>Home</button>
        <button>Favorites</button>
      </div>
    </div>
  )
}

export default NavBar