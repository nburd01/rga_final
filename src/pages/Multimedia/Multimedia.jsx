import React from 'react'
import { Photos } from '../../components/Multimedia/Photos'
import { Presse } from '../../components/Multimedia/Presse'
import { Videos } from '../../components/Multimedia/Videos'

export const Multimedia = () => {
  return (
    <div className="container">

    <h1>Le coin multimédia</h1>
    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
    <div className="HeroImage">
        <img src={require('../../assets/img/galerie/home2.jpg')} className="_HeroImage Left" alt="img"/>
      </div>
    <div className="styledUnderlignComp">
      <Photos/>
    </div>
    <div className="styledUnderlignComp">
      <Videos/>
    </div>
    <div className="styledUnderlignComp">
      <Presse/>
    </div>

  </div>
  )
}
