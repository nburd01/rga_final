import React from 'react'

export const Inscriptions = () => {
  return (
    <div className="container">

      <h1>S'inscrire à la  RGA</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home1.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Abonnements</h6>
        <h3 className="_BgSubTitle Left">Abonnements</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Inscriptions</h6>
        <h3 className="_BgSubTitle Right">Inscriptions</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Renseignement</h6>
        <h3 className="_BgSubTitle Left">Renseignement</h3>
      </div>
      
    </div>


  )
}
