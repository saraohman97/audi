import React from 'react'
import { Link } from 'react-router-dom'
import imgMenu from '../img/1277x718-audi-rs-gt-rear-light.jpg'

const Menu = () => {
  return (
    <div className='menu'>
        <div className="text">
            <Link to='/'>Modellöversikt & filtrering</Link>
            <Link to='/'>Bygg din egen Audi</Link>
            <Link to='/'>SUV</Link>
            <Link to='/'>Elbil</Link>
            <Link to='/'>Laddhybrid</Link>
            <Link to='/'>Kombi</Link>
            <Link to='/'>Familjebil</Link>
            <Link to='/'>Sportback</Link>
            <Link to='/'>Sedan & Coupé</Link>
            <Link to='/'>quattro</Link>
            <Link to='/'>Sport & prestanda</Link>
            <Link to='/'>Klimatbonusbilar</Link>
        </div>
        <div className="image">
            <img src={imgMenu} alt="" />

            <div className="image-text">
              <h3>Audi A6 Avant e-tron concept</h3>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
  )
}

export default Menu