import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Presentation = () => {
  return (
<section className=''>
<div className='_divRelative'>
<div className="_TitleSubTitle">
    <h6 className="_BgTitle Left">Présentation</h6>
    <h3 className="_BgSubTitle Left">Présentation</h3>
    </div>
    <div className="container Left">
      <div className='Card __primary'>
          <div className='location'>
           <span><FontAwesomeIcon icon="fa-magnifying-glass" /></span>
            <ul>
            <h4>A propos de la RGA</h4>
          <p>La Roazhon Goal Academy est la première structure spécifique dédiée
  aux gardiennes et gardiens de but d'Ille et Vilaine.</p>
          <p>Créée en septembre 2019 par Christophe REVEL, elle répond à une problématique d'entrainement
  rencontrée dans les clubs du district et par les goals du 35.</p>
         <p>La Roazhon Goal Academy est au service des passionnés du poste et
  des clubs qui lui font confiance... L’année dernière 22 gardiens de but de 14
  clubs différents !</p>
            </ul>
          </div>
        </div>
  </div>
</div>
</section>
  )
}
