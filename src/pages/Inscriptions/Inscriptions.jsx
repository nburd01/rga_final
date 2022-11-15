import React from 'react'
import { Abonnements } from '../../components/Abonnements/Abonnements'
import SoccerPlayer from '../../assets/Illustrations/Fans.svg'
import PDF from '../../components/Download/pdf'
import { Helmet } from 'react-helmet-async';

export const Inscriptions = () => {
  return (
    <div className='inscriptions'>
            <Helmet>
              <title>S'inscrire à la Roazhon Goal Academy</title>
              <meta 
                name='description' 
                content="Inscrivez-vous à la Roazhon Goal Academy et bénéficiez de séances d'entraînement spécifiques pour les gardiens de but !"
              />
              <link rel='canonical' href="/inscriptions"/>
            </Helmet>
      <div className="container-large">
        <div className="__intro">
        <section className="PicTitle">
            <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>S'inscrire à la RGA</h1>
            <h3>Découvrez les différentes offres pour vous abonner à la Roazhon Goal Academy dès maintenant. </h3>
            </div>
            <div className="HeroImage">
              <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but_flexibilite.jpg')} className="Roazhon Goal Academy gardien de but" alt="Roazhon Goal Academy gardien de but" loading="lazy"/>
            </div>
        </section>
        </div>
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
