import React from 'react'
import { ButtonCTA } from '../../components/btn/Btn'
import { Carte } from '../../components/Carte/Carte'
import { Lieu } from '../../components/Lieu/Lieu'
import { Presentation } from '../../components/Presentation/Presentation'
import '../../index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Temoignage } from '../../components/Temoignage/Temoignage'
import GoalKeeperSave from '../../assets/Illustrations/result.svg'

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
            <h4>22</h4>
            <span>gardiens</span>
          </div>
          <div className='num_card'>
            <h4>14</h4>
            <span>clubs différents</span>
          </div>
          <div className='num_card'>
            <h4>3</h4>
            <span>éducateurs diplômés</span>
          </div>
        </div> 
      </div>
      
    </section>
    <section className="pageBody">
    <div className="container Center">
      <div className='socials'>
        <h4>Suivez-nous sur nos réseaux sociaux :</h4>
      </div>
          <div className='socials'>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Roazhongoalacademy/">
                <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" className="iconsFontAwesome"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/roazhon-goal-academy-30482b251/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" className="iconsFontAwesome"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.secure.instagram.com/roazhongoalacademy/">
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" className="iconsFontAwesome"/>
            </a>
          </div>
      </div>
      <div className="container">
          <Presentation/>
      </div>
          <div className="container">
            <div className="illustration">
              <img src={GoalKeeperSave} alt="GoalKeeperSave" width="600" height="400" loading="lazy"/>
            </div>
          </div>
          <Temoignage/>
          <Lieu/>
          <Carte/>  
    </section>
  </div>
  )
}

