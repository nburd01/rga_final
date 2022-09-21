import React from 'react'
import './Horaires.scss'

export const HorairesComp = () => {
  return (
    <div>
    <h6 className="_BgTitle Left">Horaires</h6>
    <h3 className="_BgSubTitle Left">Horaires</h3>
    <div className="Left">
    <h3>LUNDI / MARDI :</h3>
      <ul>
          <ul>
            <li>17h15</li>
            <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
          </ul>
          <ul>
            <li>17h45</li>
            <li>Début de séance</li>
          </ul>
          <ul>
            <li>19h15</li>
            <li>Fin de séance</li>
          </ul>
      </ul>
    </div>
    <div className="Right">
      <h3>DIMANCHE :</h3>
      <ul>
        <li>En fonction du nombre de participants, séance pour tous à 11h sinon :</li>
        <h4>Groupe 2012/2013 :</h4>
        <ul>
            <li>9h</li>
            <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
          </ul>
          <ul>
            <li>9h30</li>
            <li>Début de séance</li>
          </ul>
          <ul>
            <li>10h45</li>
            <li>Fin de séance</li>
          </ul>
        <h4>Groupe 2010/2011 :</h4>
        <ul>
            <li>10h30</li>
            <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
          </ul>
          <ul>
            <li>11h</li>
            <li>Début de séance</li>
          </ul>
          <ul>
            <li>12h15</li>
            <li>Fin de séance</li>
          </ul>
      </ul>
    </div>
  </div>
  )
}
