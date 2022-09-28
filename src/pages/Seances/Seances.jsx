import React from 'react'
import { Materiel } from '../../components/Materiel/Materiel'
import { ReglesDeVie } from '../../components/ReglesDeVie/ReglesDeVie'
import { SeanceType } from '../../components/SeanceType/SeanceType'

export const Seances = () => {
  return (
    <page className='seances'>
      <div className="container-large">

    <div className="PicTitle">
    <div className="_TitleSubTitle">
      <h1>Les séances</h1>
      <h3>Tout savoir à propos des séances d'entraînement, du matériel ainsi que des règles de vie de l'Academy.</h3>
    </div>
    <div className="HeroImage">
      <img src={require('../../assets/img/galerie/webp/home4.webp')} className="_HeroImage" alt="img" loading="lazy"/>
    </div>
    </div>
  </div>
      
        <SeanceType/>

      
        <Materiel/>

      
        <ReglesDeVie/>

  </page>
  )
}
