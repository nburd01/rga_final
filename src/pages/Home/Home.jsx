import React from 'react'
import { Baseline } from '../../components/baseline/Baseline'
import { ButtonCTA } from '../../components/btn/Btn'
import { ColourSeparator } from '../../components/ColourSeparator/ColourSeparator'
import { Contact } from '../../components/Contact/Contact'
import { Horaires } from '../../components/Horaires/Horaires'
import { Lieu } from '../../components/Lieu/Lieu'
import { PhotoSelf } from '../../components/PhotoSelf/PhotoSelf'
import '../../index.scss'

export const Home = () => {
  return (
    <div className="container">
      <section className="__intro">
        <div className="_left">
          <h1>Bienvenue à la Roazhon Goal Academy !</h1>
          <h3>Entraînements spécifiques de gardiens de but au travers des séances techniques et ludiques basées au Rheu pour les 9 - 12 ans.</h3>
          <ButtonCTA/>
          {/* <Baseline/> */}
        </div>
        <div className="_right">
          <PhotoSelf/>
          <ColourSeparator/>
        </div>
      </section>
      <section className="__info">
        <div className="_divRelative">
          <Horaires/>
        </div>
        <div>
          <Lieu/>
        </div>
        <div>
          <Contact/>
        </div>
      </section>
    </div>
  )
}
