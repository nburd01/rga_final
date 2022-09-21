import React from 'react'

export const SeanceType = () => {
  return (
    <div>

      <h6 className="_BgTitle Left">Séances</h6>
      <h3 className="_BgSubTitle Left">Séance type</h3>
      <h3>LUNDI / MARDI :</h3>
      <ul>
        <li>Accueil à partir de 17h15 au terrain</li>
        <li>Mise en tenue dans les vestiaires</li>
        <li>Début de séance à 17h45</li>
        <li>Fin de séance à 19h15</li>
      </ul>
      <h3>DIMANCHE :</h3>
      <ul>
        <li>En fonction du nombre de participants, séance pour tous à 11h sinon :</li>
        <li>Groupe 2012/2013 : accueil à partir de 9h</li>
        <li>Mise en tenue dans les vestiaires</li>
        <li>Début de séance 9h30 groupe</li>
        <li>Fin de séance 10h45</li>
        <li>Groupe 2010/2011 : accueil à partir de 10h30</li>
        <li>Mise en tenue dans les vestiaires</li>
        <li>Début de séance 11h</li>
        <li>Fin de séance 12h15</li>
      </ul>
    </div>
  )
}
