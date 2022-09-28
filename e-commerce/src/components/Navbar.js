import { useState } from 'react'
import logo from '../img/Audi-Logo_2016.svg.png'
import { Link } from 'react-router-dom'
import Menu from './Menu'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    showMenu
    ? setShowMenu(false)
    : setShowMenu(true)
  }

  return (
    <div className='navbar'>
        <div className="container">
            <ul className="nav-links">
                <Link to='/' className="logo"><img src={logo} alt="logo from car brand" /></Link>
                <li onClick={toggleMenu}>Modeller</li>
                { showMenu && <Menu /> }
                <li>Köpa & äga</li>
                <li>Tjänstebil</li>
                <li>Fokus Audi</li>
                <li>Elbil</li>
            </ul>
            
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar