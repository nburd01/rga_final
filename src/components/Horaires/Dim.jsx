import React from 'react'

export const Dim = () => {
  return (
    <div className="container horaires">
    <h3>DIMANCHE*</h3>
    <ul>

      <h4>Groupe 2012/2013 :</h4>
      <ul>
        <div>
          <span>9h00</span>
          <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
        </div>
        </ul>
        <ul>
          <div>
          <span>9h30</span>
          <li>Début de séance</li>
          </div>
        </ul>
        <ul>
          <div>
          <span>10h45</span>
          <li>Fin de séance</li>
          </div>
        </ul>
      <h4>Groupe 2010/2011 :</h4>
      <ul>
        <div>
          <span>10h30</span>
          <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
          </div>
        </ul>
        <ul>
          <div>
          <span>11h00</span>
          <li>Début de séance</li>
          </div>
        </ul>
        <ul>
          <div>
          <span>12h15</span>
          <li>Fin de séance</li>
          </div>
        </ul>
        <p>*En fonction du nombre de participants, sinon séance pour tous à 11h.</p>
    </ul>
  </div>
  )
}
