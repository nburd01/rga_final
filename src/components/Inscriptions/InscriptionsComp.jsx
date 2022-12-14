import React from 'react'
import { Check } from '../Fontawesome/Check'
import { Xmark } from '../Fontawesome/Xmark'


export const InscriptionsComp = () => {
  return (
    <div className='PriceCards'>
      <div className='Card __primary' data-aos="fade-up">
        <div className='_Title'>
        <h4>Premier abonnement</h4>
          <a href="#linkAnchor">70 €</a>     
        </div>
          <p>+ 5€ par séance.</p>
          <table className='abonnements'>
            <tbody>
              <tr>
                <td>Abonnement annuel à la Roazhon Goal Academy</td>
                <td><Check/></td>                
              </tr>
              <tr>
                <td>1 paire de gants Uhlsport</td>
                <td><Check/></td>                
              </tr>
              <tr>
                <td>1 ensemble Uhlsport</td>
                <td><Check/></td>
              </tr>
              <tr>
                <td>1 livret pédagogique illustré "Je suis goal"</td>
                <td><Check/></td>
              </tr>
            </tbody>
        </table>
      </div>
      <div className='Card __primary' data-aos="fade-up">
        <div className='_Title'>
        <h4>Ré-abonnement</h4>
          <a href="#linkAnchor">50 €</a>     
        </div>
          <p>+ 5€ par séance.</p>
          <table className='abonnements'>
            <tbody>
              <tr>
                <td>Abonnement annuel à la Roazhon Goal Academy</td>
                <td><Check/></td>                
              </tr>
              <tr>
                <td>1 paire de gants Uhlsport</td>
                <td><Check/></td>                
              </tr>
              <tr>
                <td>1 ensemble Uhlsport</td>
                <td><Check/></td>
              </tr>
              <tr>
              <td>1 livret pédagogique illustré "Je suis goal"</td>

                <td><Xmark/></td>
              </tr>
            </tbody>
        </table>

      {/* <div className='Left'>
        <div className='Card __secondary '>
        <h4>Exemple</h4>
            <ul>
              <li>Cycle 1 = 1er Abonnement + 2 spécifiques : 70 + 10 = 70 €</li>
              <li>Cycle 2 = 2 spécifiques : 10 €</li>
            </ul>
        </div>
      </div> */}
      </div>
    </div>
  )
}
