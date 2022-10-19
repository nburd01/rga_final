import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'
import { Helmet } from 'react-helmet';


export const HorairesPage = () => {
    return (
      <div className='horaires'>
              <Helmet>
                <title>Roazhon Goal Academy</title>
                <meta 
                name='Roazhon Goal Academy Contact' 
                content="Les horaires de la Roazhon Goal Academy. Nous proposons des séances d'entraînements spécifiques pour les gardiens de but à Le Rheu !"
                />
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
              <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__plongeon_entrainement_dima.jpg')} className="_HeroImage" alt="img" loading="lazy"/>
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

