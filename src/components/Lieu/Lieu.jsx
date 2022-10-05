import React from 'react'
import './Lieu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Lieu = () => {
  return (
    <div className="container Right">
    <div className="_TitleSubTitle" data-aos="fade-up">
      <h6 className="_BgTitle Right">Accès</h6>
      <h3 className="_BgSubTitle Right">Accès</h3>
      </div>
      <div className="container Right">
        <div className='Card __primary' data-aos="fade-up">
          {/* <div className='location'> */}
           {/* <span><FontAwesomeIcon icon="fa-solid fa-map" /></span> */}
            <ul>
            <h4>Où nous trouver</h4>
              <li>Retrouvez-nous au Complexe de football du S.C. Le Rheu Football, accessible depuis la Route de LORIENT à la sortie Le Rheu.</li>
              <li> <a href="http://maps.google.com/?q= Avenue du stade, 35650, Le Rheu">Avenue du stade, 35650, Le Rheu</a></li>
            </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
