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
  <div className='homepage'>
    <section className='home'>
      <div className="container">
        <div className="__intro">
          <div className="_left">
            <div className="_TitleSubTitle">
              <h1>Bienvenue à la Roazhon Goal Academy !</h1>
              <h3>Entraînements spécifiques de gardiens de but au travers des séances techniques et ludiques basées au Rheu pour les 10 - 13 ans.</h3>
            </div>
            <ButtonCTA/>
            <img className="_right" src={require('../../assets/img/Jerem/jerem_cut.webp')} alt="photoCoach" loading="lazy" ></img>
        </div>
        </div>
      </div>
      <div className="separator">
        <img className="_rightmob" src={require('../../assets/img/Jerem/jerem_cut.webp')} alt="photoCoach" loading="lazy" ></img>
        <div className='numbers'>
          <div className='num_card'>
            <span>22</span>
            <h5>gardiens</h5>
          </div>
          <div className='num_card'>
            <span>14</span>
            <h5>clubs différents</h5>
          </div>
          <div className='num_card'>
            <span>3</span>
            <h5>éducateurs diplômés</h5>
          </div>
        </div> 
      </div>
    </section>
    <section className="pageBody">
      <div className="container">
          <Presentation/>
      </div>
          <Lieu/>
          <Carte/>  
    </section>
  </div>
  )
}
