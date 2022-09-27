import React from 'react'

export const Planification = () => {
  return (
<div className="container">
  <div className="block">
  <div className="_TitleSubTitle">

  <h6 className="_BgTitle Left">Planification</h6>
  <h3 className="_BgSubTitle Left">Planification</h3>
  </div>
    <div className='container'>
      <div className='Card __primary' style={{overflow:"auto"}}>
        {/* <ul>
          <li>Cycles d'entraînements calés sur le rythme scolaire.</li>
          <li>Pas de séances pendant les vacances. Il sera nécessaire de télécharger
        l’application <a href="https://www.teampulseapp.fr/fr">« Team Pulse »</a> pour faciliter la transmission des informations en cliquant <a href="https://www.teampulseapp.fr/fr">içi</a>.</li>
          <li>Premier spécifique lundi 13/09/2020.</li>
          <li>2 séances semaine + 1 dimanche matin sur deux</li>
          <li>Lundi soir 2012/2013 : 17h45-19h15</li>
          <li>Mardi soir 2010/2011 : 17h45-19h15</li>
          <li>Dimanche matin : 2011/2012 : 9h30 – 10h45</li>
          <li>2009/2010 : 11h – 12h15</li>
          <li>OU Tous à 11h en fonction du nombre de participants</li>
        </ul> */}
        <table>
          <tr>
            <th>Génération</th>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Dimanche</th>
          </tr>
          <tr>
            <td>12/13</td>
            <td>17h45-19h15</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10/11</td>
            <td></td>
            <td>17h45-19h15</td>
            <td></td>
          </tr>
          <tr>
            <td>11/12</td>
            <td></td>
            <td></td>
            <td>9h30–10h45</td>
          </tr>
          <tr>
            <td>09/10</td>
            <td></td>
            <td></td>
            <td>11h00-12h15</td>
          </tr>
        </table>
      </div>
        <p>*Ou tous à 11h en fonction du nombre de participants</p>
    </div>
  </div>
</div>
  )
}
