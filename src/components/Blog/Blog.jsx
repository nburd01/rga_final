import React from 'react'
import './Blog.scss'

export const Blog = () => {
    return (
        <div className="container Right">
        <div className="_TitleSubTitle" data-aos="fade-up">
          <h6 className="_BgTitle Right">Actualités</h6>
          <h3 className="_BgSubTitle Right">Actualités</h3>
          </div>
          <div className="container Right">
            <div className='Card __primary' data-aos="fade-up">
                  <ul>
                  <h4>À propos de la RGA</h4>
                  <img src={require('../../assets/img/Jerem/jerem_cut.webp')} alt="Jérémy Sauffisseau Roazhon Goal Academy" loading="lazy" ></img>
                <li>La Roazhon Goal Academy est la <span>première structure spécifique</span> dédiée
        aux gardiennes et gardiens de but d'Ille et Vilaine.</li>
                <li>Créée en septembre 2019 par Christophe REVEL, elle <span>répond à une problématique d'entrainement</span> rencontrée dans les clubs du district et par les goals du 35.</li>
              <li>La Roazhon Goal Academy est <span>au service des passionnés</span> du poste et
        des clubs qui lui font confiance... L’année dernière 22 gardiens de but de 14
        clubs différents !</li>
                  </ul>
                  <button>Accéder</button>
            </div>
        </div>
      </div>
      )
    }
    