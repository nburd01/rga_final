import React from 'react'
import { Infrastructures } from '../../components/Infrastructures/Infrastructures'
import { Objectifs } from '../../components/Objectifs/Objectifs'
import { Staff } from '../../components/Staff/Staff'
import { Stagiaires } from '../../components/Stagiaires/Stagiaires'
import GoalKeeperSave from '../../assets/Illustrations/result.svg'

export const RGA = () => {
  return (
    <page className='RGA'>
      <div className="container-large">
      <section className="PicTitle">
      <div className="_TitleSubTitle">
            <h1>À propos de la Roazhon Goal Academy</h1>
            <h3>Tout savoir à propos des objectifs, des informations concernant les stagiaires, le staff et les infrastructures.</h3>
            </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/home5.webp')} className="_HeroImage" alt="img"/>
          </div>
      </section>
      </div>
      <section className="pageBody">
          <Objectifs/>
          <div className="container">
            <div className="illustration">
              <img classname='_illustration' src={GoalKeeperSave} alt="GoalKeeperSave" width="600" height="400" loading="lazy"/>
            </div>
          </div>
          <Stagiaires/>
          <Staff/>
          <Infrastructures/>
      </section>
    </page>
  )
}
