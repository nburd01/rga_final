import React from 'react'

export const Dim = () => {
  return (
    <div className="container  horaires">
    <h3>DIMANCHE</h3>
    <ul>
      <li>En fonction du nombre de participants, séance pour tous à 11h sinon :</li>
      <h4>Groupe 2012/2013 :</h4>
      <ul>
          <span>9h</span>
          <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
        </ul>
        <ul>
          <span>9h30</span>
          <li>Début de séance</li>
        </ul>
        <ul>
          <span>10h45</span>
          <li>Fin de séance</li>
        </ul>
      <h4>Groupe 2010/2011 :</h4>
      <ul>
          <span>10h30</span>
          <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
        </ul>
        <ul>
          <span>11h</span>
          <li>Début de séance</li>
        </ul>
        <ul>
          <span>12h15</span>
          <li>Fin de séance</li>
        </ul>
    </ul>
  </div>
  )
}
