import React from 'react'

export const Seances = () => {
  return (
    <div className="container">

    <h1>Les séances</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home4.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Séances</h6>
        <h3 className="_BgSubTitle Left">Séance type</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Matériel</h6>
        <h3 className="_BgSubTitle Right">Le matériel</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Planification</h6>
        <h3 className="_BgSubTitle Left">Planification</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Horaires</h6>
        <h3 className="_BgSubTitle Right">Horaires</h3>
      </div>
  
  </div>
  )
}
