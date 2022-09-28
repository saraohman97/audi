import React from 'react'
import carImg from '../img/2021.png'

const Car = () => {
  return (
    <div className='car'>
        <img src={carImg} alt="car model in audi dealership" />
        <p>e-tron GT</p>
    </div>
  )
}

export default Car