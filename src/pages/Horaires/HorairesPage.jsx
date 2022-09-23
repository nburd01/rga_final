import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'

export const HorairesPage = () => {
    return (
      <div className="container">
      <div className="PicTitle">
      <div>
        <h1>Planning et horaires</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      </div>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home5.jpg')} className="_HeroImage" alt="img"/>
      </div>
    </div>
        <div >
          <Planification/>
      </div>
        <div >
          <HorairesComp/>
      </div>
    </div>
    )
}

