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
      <h1>Bienvenue à la Roazhon Goal Academy !</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempore possimus quas. </h3>
      <ButtonCTA/>
      <Baseline/>
      <PhotoSelf/>
      <ColourSeparator/>
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
