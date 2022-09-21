import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'

export const HorairesPage = () => {
    return (
    <div className='container'>
             <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home5.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
        <div className="styledUnderlignComp">
          <HorairesComp/>
      </div>
        <div className="styledUnderlignComp">
          <Planification/>
      </div>
    </div>
    )
}

