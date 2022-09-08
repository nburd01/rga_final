import React from 'react'

export const RGA = () => {
  return (
    <div className="container">

      <h1>A propos de la Roazhon Goal Academy</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home3.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Objectifs</h6>
        <h3 className="_BgSubTitle Left">Objectifs</h3>
      </div>
        <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Les stagiaires</h6>
        <h3 className="_BgSubTitle Right">Les stagiaires</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Infrastructures</h6>
        <h3 className="_BgSubTitle Left">Infrastructures</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Right">Le staff</h6>
        <h3 className="_BgSubTitle Right">Le staff</h3>
      </div>
      <div className="styledUnderlignComp">
        <h6 className="_BgTitle Left">Règles de vie</h6>
        <h3 className="_BgSubTitle Left">Règles de vie</h3>
      </div>
    
    </div>

  )
}
