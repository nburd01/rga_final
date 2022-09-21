import React from 'react'
import { ContactComp } from '../../components/Contact/Contact'
import { Horaires } from '../../components/Horaires/Horaires'
import { Lieu } from '../../components/Lieu/Lieu'
import { Materiel } from '../../components/Materiel/Materiel'
import { Planification } from '../../components/Planification/Planification'
import { SeanceType } from '../../components/SeanceType/SeanceType'

export const Seances = () => {
  return (
    <div className="container">

    <h1>Les séances</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home4.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <SeanceType/>
      </div>
      <div className="styledUnderlignComp">
        <Materiel/>
      </div>
      <div className="styledUnderlignComp">
          <Planification/>
      </div>
      <div className="styledUnderlignComp">
          <Horaires/>
        </div>
  
  </div>
  )
}
