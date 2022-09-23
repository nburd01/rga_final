import React from 'react'
import { Materiel } from '../../components/Materiel/Materiel'
import { ReglesDeVie } from '../../components/ReglesDeVie/ReglesDeVie'
import { SeanceType } from '../../components/SeanceType/SeanceType'

export const Seances = () => {
  return (
    <div className="container">
    <div className="PicTitle">
    <div>
      <h1>Les séances</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    </div>
    <div className="HeroImage">
      <img src={require('../../assets/img/galerie/webp/home4.webp')} className="_HeroImage" alt="img"/>
    </div>
  </div>
      
        <SeanceType/>

      
        <Materiel/>

      
        <ReglesDeVie/>

  </div>
  )
}
