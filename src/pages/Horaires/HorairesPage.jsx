import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'
import { Helmet } from 'react-helmet-async';


export const HorairesPage = () => {
    return (
      <div className='horaires'>
              <Helmet>
                <title>Les horaires de la Roazhon Goal Academy</title>
                <meta 
                name='title' 
                content="Roazhon Goal Academy Horaires"
                />
                <meta 
                name='description' 
                content="Roazhon Goal Academy Horaires"
                />
                <link rel='canonical' href="/horaires"/>
                <meta name='keywords' content='Horaires, Football, Academy, Roazhon Goal Academy, Le Rheu, Rennes, Gardiens de but, spécifiques, jeunes, formation' />
              </Helmet>
        <div className="container-large">
        <div className="__intro">
          
          <div className="PicTitle">
          <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>Planning et horaires</h1>
            <h3>Accédez aux créneaux horaires ainsi qu'aux différentes disponibilités selon les catégories d'âge des gardiens et gardiennes. </h3>
          </div>
            <div className="HeroImage">
              <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__plongeon_entrainement_dima.jpg')} className="_HeroImage" alt="Roazhon Goal Academy Gardien de but" loading="lazy"/>
            </div>
          </div>
          </div>
        </div>
        <section className="pageBody">
          <Planification/>
          <HorairesComp/>
        </section>
    </div>
    )
}

