import React from 'react'
import { Photos } from '../../components/Multimedia/Photos'
import { Presse } from '../../components/Multimedia/Presse'
import { Videos } from '../../components/Multimedia/Videos'

export const Multimedia = () => {
  return (
    <div className='multimedia'>
      <div className="container-large">
      <div className="PicTitle">
      <div className="_TitleSubTitle">
        <h1>Le coin multimédia</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      </div>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/webp/home2.webp')} className="_HeroImage" alt="img" loading="lazy"/>
      </div>
      </div>
    </div>
    <div >
      <Photos/>
    </div>
    <div >
      <Videos/>
    </div>
    <div >
      <Presse/>
    </div>
  </div>
  )
}
