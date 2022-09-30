import React from 'react'
import { Materiel } from '../../components/Materiel/Materiel'
import { ReglesDeVie } from '../../components/ReglesDeVie/ReglesDeVie'


export const Seances = () => {
  return (
    <div className='seances'>
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
        <div className="_TitleSubTitle">
          <h1>Les séances</h1>
          <h3>Tout savoir à propos des séances d'entraînement, du matériel ainsi que des règles de vie de l'Academy.</h3>
        </div>
        <div className="HeroImage">
          <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but__beach_soccer.jpg')} className="_HeroImage" alt="img" loading="lazy"/>
        </div>
        </div>
      </div>
      </div>
      <section className="pageBody">
        <Materiel/>     
        <ReglesDeVie/>
        </section>

    </div>
  )
}
