import React from 'react'
import { Abonnements } from '../../components/Abonnements/Abonnements'
import { InscriptionsComp } from '../../components/Inscriptions/InscriptionsComp'
import SoccerPlayer from '../../assets/Illustrations/SoccerPlayer.svg'
import PDF from '../../components/Download/pdf'

export const Inscriptions = () => {
  return (
    <page className='inscriptions'>
      <section className="PicTitle">

          <h1>S'inscrire à la RGA</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/home1.webp')} className="_HeroImage" alt="img"/>
          </div>
      </section>
      <section className="pageBody">
        <Abonnements/>
        <div className='illustration'>
          <img className='_illustration' src={SoccerPlayer} alt="SVG logo image"/>
        </div>
        <PDF/>
      </section>
    </page>
    )
  }
