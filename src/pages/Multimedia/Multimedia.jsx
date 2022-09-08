import React from 'react'

export const Multimedia = () => {
  return (
    <div className="container">

    <h1>Le coin multimédia</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home2.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
    <div className="styledUnderlignComp">
      <h6 className="_BgTitle Left">Photos</h6>
      <h3 className="_BgSubTitle Left">Photos</h3>
    </div>
    <div className="styledUnderlignComp">
      <h6 className="_BgTitle Right">Vidéos</h6>
      <h3 className="_BgSubTitle Right">Vidéos</h3>
    </div>
    <div className="styledUnderlignComp">
      <h6 className="_BgTitle Left">Presse</h6>
      <h3 className="_BgSubTitle Left">Presse</h3>
    </div>

  </div>
  )
}
