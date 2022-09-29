import React from 'react'
import { Abonnements } from '../../components/Abonnements/Abonnements'
import SoccerPlayer from '../../assets/Illustrations/SoccerPlayer.svg'
import PDF from '../../components/Download/pdf'

export const Inscriptions = () => {
  return (
    <div className='inscriptions'>
      <div className="container-large">
      <section className="PicTitle">
          <div className="_TitleSubTitle">
          <h1>S'inscrire à la RGA</h1>
          <h3>Découvrez les différentes offres pour vous abonner à la Roazhon Goal Academy dès maintenant. </h3>
          </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/home7.webp')} className="_HeroImage" alt="img" loading="lazy"/>
          </div>
      </section>
      </div>
      <section className="pageBody">
        <Abonnements/>
        <div className="illustration">
          <img  src={SoccerPlayer} alt="Soccer player" loading="lazy"/>
        </div>
        <PDF/>
      </section>
    </div>
    )
  }
