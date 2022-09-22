import React from 'react'
import { Abonnements } from '../../components/Abonnements/Abonnements'
import { InscriptionsComp } from '../../components/Inscriptions/InscriptionsComp'

export const Inscriptions = () => {
  return (
    <div className="container">
      <div className="PicTitle">
      <div>
        <h1>S'inscrire à la  RGA</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      </div>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home1.jpg')} className="_HeroImage" alt="img"/>
      </div>
    </div>
      <div className="">
       <Abonnements/>
      </div>
      <div className="">
        <InscriptionsComp/>
      </div>
    </div>


    )
  }
