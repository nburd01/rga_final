import React from 'react'
import { ButtonCTA } from '../../components/btn/Btn'
import { Carte } from '../../components/Carte/Carte'
import { ColourSeparator } from '../../components/ColourSeparator/ColourSeparator'
import { Lieu } from '../../components/Lieu/Lieu'
import { PhotoSelf } from '../../components/PhotoSelf/PhotoSelf'
import { Presentation } from '../../components/Presentation/Presentation'
import '../../index.scss'


export const Home = () => {
  return (
  <page className='home'>
    <section className='home'>
      <div className="container">
        <div className="__intro">
          <div className="_left">
            <h1>Bienvenue à la Roazhon Goal Academy !</h1>
            <h3>Entraînements spécifiques de gardiens de but au travers des séances techniques et ludiques basées au Rheu pour les 9 - 12 ans.</h3>
            <ButtonCTA/>
          </div>
          <div className="_right">
            <PhotoSelf/>
            <ColourSeparator/>
          </div>
        </div>
      </div>
    </section>
    <section className="pageBody">
      <div className="container">
          <Presentation/>
      </div>
      <div className="container">
          <Lieu/>
      </div>
      <div className="container">
          <Carte/>
      </div>
      
    </section>
  </page>
  )
}
