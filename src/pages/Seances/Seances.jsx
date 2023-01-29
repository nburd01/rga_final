import React from 'react'
import { Materiel } from '../../components/Materiel/Materiel'
import { ReglesDeVie } from '../../components/ReglesDeVie/ReglesDeVie'
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from "react-lazy-load-image-component";


export const Seances = () => {
  return (
    <div className='seances'>
      <Helmet>
        <title>Découvrez les séances de la Roazhon Goal Academy</title>
        <meta 
        name='description' 
        content="Découvrez les séances de la Roazhon Goal Academy !"
        />
        <meta 
        name='title' 
        content="Découvrez les séances de la Roazhon Goal Academy !"
        />
        <link rel='canonical' href="/seances"/>
      </Helmet>
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
        <div className="_TitleSubTitle" data-aos="fade-up">
          <h1>Les séances</h1>
          <h3>Tout savoir à propos des séances d'entraînement, du matériel ainsi que des règles de vie de l'Academy.</h3>
        </div>
        <div className="HeroImage">
          <LazyLoadImage src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but__beach_soccer.jpg')} className="_HeroImage" alt="img" loading="lazy"/>
        </div>
        </div>
      </div>
      </div>
      <section className="pageBody">
        <Materiel/>     
        <ReglesDeVie/>
        </section>

    </div>
  )
}
