import React from 'react'
import { Link } from 'react-router-dom'

export const Stagiaires = () => {
  return (
<div className="container Right">
  <div className="_TitleSubTitle">
    <h6 className="_BgTitle Right">Stagiaires</h6>
    <h3 className="_BgSubTitle Right">Les stagiaires</h3>
    </div>
    <div className="container Right">
      <div className='Card __primary'>
        <ul>
        <h4>Quel est le profil des stagiaires</h4>
          <li><span>Structure spécifique GARDIENS DE BUT</span> ouverte aux garçons et aux filles.</li>
          <li>Accueil de licenciés <span>internes et externes au SC Le Rheu</span>.
        2 groupes : enfants nés en 2012-2013 / 2010-2011.</li>
          <li><span>Être licencié[e]s ou non</span> dans un club de Football affilié à la Fédération
        Française de Football.</li>
          <li>Inscriptions limitées afin de pouvoir <span>proposer des séances de qualités</span>.
        Chaque enfant qui souhaite s’inscrire devra remplir la <Link to="/inscriptions" style={{color:"var(--fifth)"}}>Fiche de
        renseignement</Link> contenant notamment les autorisations parentales jointes.
        Pour les enfants non-licencié[e]s, l’autorisation médicale de
        pratique est à compléter par le médecin traitant.</li>
        </ul>
      </div>
    </div>
  </div>
  )
}