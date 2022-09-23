import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Check } from '../Check/Check'

export const InscriptionsComp = () => {
  return (
  <div className='container'>
    <div className="PriceCards">
      <div className='Card __primary'>
        <div className='_Title'>
        <h4>Premier abonnement</h4>
          <h5>70 euros</h5>
          <Check/>
        </div>
          <p>5 euros : participation à chaque séance spécifique.</p>
        <li>
          Abonnement annuel à la Roazhon Goal Academy 
          <li>1 paire de gants Uhlsport</li>
          <li>1 ensemble Uhlsport</li>
          <li>1 livret pédagogique illustré "Je suis goal"</li>
          <img src={require('../../assets/img/Livre/jesuisgoal-couverture-shop_1000x1500.webp')} alt="photoLivre"></img>
        </li>
      </div>
      <div className='Card __primary'>
      <div className='_Title'>
        <h4>Ré-abonnement</h4>
          <h5>50 euros</h5>
          <Check/>
        </div>
          <p>5 euros : participation à chaque séance spécifique.</p>
        <li>Abonnement annuel à la Roazhon Goal Academy
          <li>1 paire de gants Uhlsport</li>
          <li>1 ensemble Uhlsport
          </li>
        </li>
      </div>

      {/* <div className='Left'>
        <div className='Card __secondary '>
        <h4>Exemple</h4>
            <ul>
              <li>Cycle 1 = 1er Abonnement + 2 spécifiques : 70 + 10 = 70 euros</li>
              <li>Cycle 2 = 2 spécifiques : 10 euros</li>
            </ul>
        </div>
      </div> */}
    </div>
</div>

  )
}
