import React from 'react'
import { Dim } from './Dim'
import './Horaires.scss'
import { LunMar } from './LunMar'

export const HorairesComp = () => {
  return (
    <div className="container align_center">
      <div className="_TitleSubTitle" data-aos="fade-up">
        <h6 className="_BgTitle Right">Horaires</h6>
        <h3 className="_BgSubTitle Right">Horaires</h3>
        <div className='horaires_comp'>
      <div className='horaire'>
      <div>
        <h3>LUNDI / MARDI</h3>
      </div>
      <ul>
        <div>
          <span>17h15</span>
          <li>Accueil au terrain et mise en tenue dans les vestiaires</li>
        </div>
      </ul>
      <ul>
      <div>
        <span>17h45</span>
        <li>Début de séance</li>
        </div>

      </ul>
      <ul>
      <div>

        <span>19h10</span>
        <li>Fin de séance</li>
        </div>
      </ul>
      </div>
      <div className='horaire'>
    <div>
    <h3>DIMANCHE*</h3>
    </div>
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
        <p>*Ou à 11h en fonction du nombre de participants.</p>
    </ul>
  </div>
  </div>
        </div>
    </div>
  )
}
