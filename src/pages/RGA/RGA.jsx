import React from 'react'
import { Infrastructures } from '../../components/Infrastructures/Infrastructures'
import { Objectifs } from '../../components/Objectifs/Objectifs'
import { Staff } from '../../components/Staff/Staff'
import { Stagiaires } from '../../components/Stagiaires/Stagiaires'
import SoccerPlayer from '../../assets/Illustrations/SoccerPlayer.svg'

export const RGA = () => {
  return (
    <div className='home'>
    <section className='home'>

     <div className="__intro">
      <div className="container-large">
      <section className="PicTitle">
      <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>À propos de la Roazhon Goal Academy</h1>
            <h3>Tout savoir à propos des objectifs, des informations concernant les stagiaires, le staff et les infrastructures.</h3>
            </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__coach_entraineur.jpg')} className="_HeroImage" alt="img"/>
          </div>
      </section>
      </div>
      </div>
    </section>
      <section className="pageBody">
          <Objectifs/>
          <div className="container">
            <div className="illustration">
              <img src={SoccerPlayer} alt="GoalKeeperSave" width="600" height="400" loading="lazy"/>
            </div>
          </div>
          <Stagiaires/>
          <Staff/>
          <Infrastructures/>
      </section>
    </div>
  )
}
