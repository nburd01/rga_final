import React from 'react'
import { Materiel } from '../../components/Materiel/Materiel'
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
  </div>
  )
}
