import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Planification = () => {
  return (
<div className="container">
  <div className="block">
  <div className="_TitleSubTitle">

  <h6 className="_BgTitle Left">Planification</h6>
  <h3 className="_BgSubTitle Left">Planification</h3>
  </div>
    <div className='container'>
      <div className='Card __primary planification' style={{overflow:"auto"}}>
        <table>
          <tr>
            <th>Groupes</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Dimanche*</th>
          </tr>
          <tr>
            <td><p>2012/2013</p></td>
            <td><p>17h45-19h15</p></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><p>2010/2011</p></td>
            <td></td>
            <td><p>17h45-19h15</p></td>
            <td></td>
          </tr>
          <tr>
            <td><p>2011/2012</p></td>
            <td></td>
            <td></td>
            <td><p>9h30–10h45</p></td>
          </tr>
          <tr>
            <td><p>2009/2010</p></td>
            <td></td>
            <td></td>
            <td><p>11h00-12h15</p></td>
          </tr>
        </table>
        <p>*Ou à 11h en fonction du nombre de participants</p>
      </div>

      {/* <div className="container">
        <div className='_planification'>
            <ul class="fa-ul Caret">
            <li><span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" /></span>Cycles d'entraînements calés sur le rythme scolaire.</li>
            <li><span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" /></span>Pas de séances pendant les vacances. Il sera nécessaire de télécharger
            l’application <a href="https://www.teampulseapp.fr/fr">« Team Pulse »</a> pour faciliter la transmission des informations en cliquant <a href="https://www.teampulseapp.fr/fr">içi</a>.</li>
            <li><span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" /></span>Premier spécifique lundi 13/09/2020.</li>
            <li><span class="fa-li"><FontAwesomeIcon icon="fa-solid fa-caret-right" /></span>Deux séances semaine + 1 dimanche matin sur deux</li>
            </ul> 
        </div>
      </div> */}
    </div>
  </div>
</div>
  )
}
