import React from 'react'
import { Infrastructures } from '../../components/Infrastructures/Infrastructures'
import { Objectifs } from '../../components/Objectifs/Objectifs'
import { Staff } from '../../components/Staff/Staff'
import { Stagiaires } from '../../components/Stagiaires/Stagiaires'
import GoalKeeper from '../../assets/Illustrations/Goalkeeper.svg'

export const RGA = () => {
  return (
    <div className="container">

      <h1>A propos de la Roazhon Goal Academy</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home3.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="">
        <Objectifs/>
      </div>
      <div>
        <img src={GoalKeeper} alt="Goalkeeper"/>
      </div>
        <div className="">
        <Stagiaires/>
      </div>
      <div className="">
        <Staff/>
      </div>
      <div className="">
        <Infrastructures/>
      </div>
    </div>

  )
}
