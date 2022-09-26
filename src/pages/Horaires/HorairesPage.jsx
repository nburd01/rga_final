import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'

export const HorairesPage = () => {
    return (
      <page className='horaires'>
      <div className="PicTitle">
      <div>
        <h1>Planning et horaires</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      </div>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/webp/home5.webp')} className="_HeroImage" alt="img"/>
      </div>
    </div>
        <div >
          <Planification/>
      </div>
        <div >
          <HorairesComp/>
      </div>
    </page>
    )
}

