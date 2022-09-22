import React from 'react'
import SoccerPlayer from '../../assets/Illustrations/SoccerPlayer.svg'

export const InscriptionsComp = () => {
  return (

<div className="container">
  <div className='Card'>
    <h4>Premier abonnement</h4>
      <h5>70 euros</h5>
      <p>5 euros : participation à chaque séance spécifique.</p>


    <li>
      Abonnement annuel à la Roazhon Goal Academy 
      <li>1 paire de gants Uhlsport</li>
      <li>1 livret pédagogique illustré "je suis goal"</li>
      <li>1 ensemble Uhlsport
        <ul>
        <li>maillot</li>
        <li>short</li>
        <li>chaussettes</li>
          </ul> 
      </li>
    </li>
  </div>
  <div>
    <img src={SoccerPlayer} alt="SVG logo image"/>
  </div>
  <div className='Card'>
    <h4>Ré-abonnement</h4>
      <h5>50 euros</h5>
      <p>5 euros : participation à chaque séance spécifique.</p>
    <li>Abonnement annuel à la Roazhon Goal Academy
      <li>1 paire de gants Uhlsport</li>
      <li>1 ensemble Uhlsport</li>
      <ul>
        <li>maillot</li>
        <li>short</li>
        <li>chaussettes</li>
      </ul>
    </li>
  </div>


  <div className='Left'>

  <h4>Exemple</h4>
      <ul>
        <li>Cycle 1 = 1er Abonnement + 2 spécifiques : 70 + 10 = 70 euros</li>
        <li>Cycle 2 = 2 spécifiques : 10 euros</li>
      </ul>
  </div>


</div>

  )
}
