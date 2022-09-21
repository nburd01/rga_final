import React from 'react'
import { Abonnements } from '../../components/Abonnements/Abonnements'
import { InscriptionsComp } from '../../components/Inscriptions/InscriptionsComp'
// import { Renseignements } from '../../components/Renseignements/Renseignements'

export const Inscriptions = () => {
  return (
    <div className="container">

      <h1>S'inscrire à la  RGA</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home1.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
       <Abonnements/>
      </div>
      <div className="styledUnderlignComp">
        <InscriptionsComp/>
      </div>
      {/* <div className="styledUnderlignComp">
        <Renseignements/>
      </div> */}
      
    </div>


    )
  }
