import React from 'react'
import Car from '../components/Car'
import carAudi from '../img/A6-avant_desktop.jpg'
import imgElbil from '../img/1277x718-audi-rs-gt-rear-light.jpg'

const HomeView = () => {
  return (
    <div className='home-view'>

      <div className="bg-showcase">
        <div className='showcase'>
          <h1>I framkant idag. Och imorgon.</h1>
          <p>Audi RS e-tron GT är framtidens elbil idag. Våra nya koncept visar att vi kommer att skapa framtidens bilar även imorgon.</p>
          <button className='btn-white'>Läs mer</button>
        </div>
      </div>

      <div className="bg-white">
        <div className="cars-showcase">
          <div className="filter">
            <button className='btn-filter'>Modellserie</button>
            <button className='btn-filter'>Fordonstyp</button>
          </div>

          <div className="cars">
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
            <Car />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="single-car-showcase">
          <img src={carAudi} alt="" className='img' />

          <div className="text">
            <h1>Audi A6 Avant</h1>
            <small>Förbrukning, blandad körning1: 6,3–5,4 l/100km <br />
                    CO₂utsläpp, blandad körning1: 166–141 g/km</small>
            <div className="buttons">
              <button className='btn-black'>Bygg din Audi</button>
              <button className='btn-white'>Läs mer</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-rally">
        <div className="rally-showcase">
          <h1>Nya Audi RS Q e-tron E2</h1>
          <p>Byggd för ett av världens tuffaste terrängrallyn, Dakar.</p>
          <small>Modellen är inte tillgänglig som produktionsmodell.</small>
          <button className='btn-white'>Läs mer</button>
        </div>
      </div>

      <div className="bg-white">
        <div className="elbil-showcase">
          <img src={imgElbil} alt="" />
          <div className="text">
            <h1>Framtidens bilar redan idag.</h1>
            <p>Upplev Audi som elbil</p>
            <button className='btn-black'>Läs mer här</button>
          </div>
        </div>
      </div>


      <div className="bg-leverans">
        <div className="leverans-showcase">
          <h1>Bilar med snabb leverans</h1>
          <p>Sök bland våra nya eller begagnade bilar i lager med omgående leverans.</p>
          <button className='btn-white'>Hitta din Audi</button>
        </div>
      </div>




    </div>
  )
}

export default HomeView