import React from 'react'
import { HorairesComp } from '../../components/Horaires/HorairesComp'
import { Planification } from '../../components/Planification/Planification'

export const HorairesPage = () => {
    return (
      <div className='horaires'>
        <div className="container-large">
        <div className="__intro">

          <div className="PicTitle">
          <div className="_TitleSubTitle">
            <h1>Planning et horaires</h1>
            <h3>Accédez aux créneaux horaires ainsi qu'aux différentes disponibilités selon les catégories d'âge des gardiens et gardiennes. </h3>
          </div>
            <div className="HeroImage">
              <img src={require('../../assets/img/galerie/webp/home5.webp')} className="_HeroImage" alt="img" loading="lazy"/>
            </div>
          </div>
          </div>
        </div>
        <section className="pageBody">
          <Planification/>
          <HorairesComp/>
        </section>
    </div>
    )
}

