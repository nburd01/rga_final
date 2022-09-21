import React from 'react'
import { Infrastructures } from '../../components/Infrastructures/Infrastructures'
import { Objectifs } from '../../components/Objectifs/Objectifs'
import { ReglesDeVie } from '../../components/ReglesDeVie/ReglesDeVie'
import { Staff } from '../../components/Staff/Staff'
import { Stagiaires } from '../../components/Stagiaires/Stagiaires'

export const RGA = () => {
  return (
    <div className="container">

      <h1>A propos de la Roazhon Goal Academy</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home3.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <Objectifs/>
      </div>
        <div className="styledUnderlignComp">
        <Stagiaires/>
      </div>
      <div className="styledUnderlignComp">
        <Infrastructures/>
      </div>
      <div className="styledUnderlignComp">
        <Staff/>
      </div>
      <div className="styledUnderlignComp">
        <ReglesDeVie/>
      </div>
    
    </div>

  )
}
