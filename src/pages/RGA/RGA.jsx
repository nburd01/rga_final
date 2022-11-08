import React from 'react'
import { Infrastructures } from '../../components/Infrastructures/Infrastructures'
import { Objectifs } from '../../components/Objectifs/Objectifs'
import { Staff } from '../../components/Staff/Staff'
import { Stagiaires } from '../../components/Stagiaires/Stagiaires'
import SoccerPlayer from '../../assets/Illustrations/SoccerPlayer.svg'
import { Helmet } from 'react-helmet';
// import SEO from '../../seo/SEO'

export const RGA = () => {
  return (
    <div className='RGA'>
      <Helmet>
        <title>A propos</title>
        <meta 
          name='description' 
          content='this is the description'
        />
      </Helmet>
      <div className="container-large">
     <div className="__intro">
      <section className="PicTitle">
      <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>À propos de la Roazhon Goal Academy</h1>
            <h3>Tout savoir à propos des objectifs, des informations concernant les stagiaires, le staff et les infrastructures.</h3>
            </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__coach_entraineur.jpg')} className="Roazhon Goal Academy entraîneur" alt="img"/>
          </div>
      </section>
      </div>
      </div>

      <section className="pageBody">
          <Objectifs/>
          <div className="container">
            <div className="illustration">
              <img src={SoccerPlayer} alt="Roazhon Goal Academy illustration gardien de but plongeon" width="600" height="400" loading="lazy"/>
            </div>
          </div>
          <Stagiaires/>
          <Staff/>
          <Infrastructures/>
      </section>
    </div>
  )
}
