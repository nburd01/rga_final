import React from 'react'
import './Lieu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Lieu = () => {
  return (
    <div className="container">
    <div className="block">
    <div className="_TitleSubTitle">
      <h6 className="_BgTitle Right">Accès</h6>
      <h3 className="_BgSubTitle Right">Accès</h3>
      </div>
      <div className="container Right">
        <div className='Card __primary'>
          <div className='location'>
          <span><FontAwesomeIcon icon="fa-solid fa-location-dot" /></span>
          <ul>
            <li>Complexe de football du SC LE RHEU FOOTBALL, </li>
            <li>Route de LORIENT sortie LE RHEU</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
