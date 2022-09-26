import React from 'react'
import { Infrastructures } from '../../components/Infrastructures/Infrastructures'
import { Objectifs } from '../../components/Objectifs/Objectifs'
import { Staff } from '../../components/Staff/Staff'
import { Stagiaires } from '../../components/Stagiaires/Stagiaires'
import GoalKeeper from '../../assets/Illustrations/Goalkeeper.svg'

export const RGA = () => {
  return (
    <page className='RGA'>
      <section className="PicTitle">
      <div className="_TitleSubTitle">
            <h1>A propos de la Roazhon Goal Academy</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
            </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/home5.webp')} className="_HeroImage" alt="img"/>
          </div>
      </section>
      <section className="pageBody">
          <Objectifs/>
          <img classname='_illustration' src={GoalKeeper} alt="Goalkeeper"/>
          <Stagiaires/>
          <Staff/>
          <Infrastructures/>
      </section>
    </page>
  )
}
