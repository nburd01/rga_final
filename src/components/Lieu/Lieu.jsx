import React from 'react'
import './Lieu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Lieu = () => {
  return (
    <div className="container Left">
    <div className="_TitleSubTitle">
      <h6 className="_BgTitle Left">Accès</h6>
      <h3 className="_BgSubTitle Left">Accès</h3>
      </div>
      <div className="container Left">
        <div className='Card __primary' data-aos="fade-up">
          {/* <div className='location'> */}
           {/* <span><FontAwesomeIcon icon="fa-solid fa-map" /></span> */}
            <ul>
            <h4>Où nous trouver</h4>
              <li>Retrouvez-nous au Complexe de football du S.C. Le Rheu Football, accessible depuis la Route de LORIENT à la sortie Le Rheu.</li>
              <li>Avenue du stade 35650 Le Rheu</li>
            </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
