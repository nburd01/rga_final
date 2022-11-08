import React from 'react'
import { Materiel } from '../../components/Materiel/Materiel'
import { ReglesDeVie } from '../../components/ReglesDeVie/ReglesDeVie'
import { Helmet } from 'react-helmet-async';
import SEO from '../../seo/SEO';


export const Seances = () => {
  return (
    <div className='seances'>
      <SEO
        title="Bienvenue à la Roazhon Goal Academy"
        description="Bienvenue à la Roazhon Goal Academy. Nous proposons des entraînements spécifiques de gardiens de but au travers de séances techniques et ludiques pour les 10 - 13 ans à proximité de Rennes !"
        name="Bienvenue à la Roazhon Goal Academy"
        type="accueil"
      />
      <Helmet>
        <title>Retrouvez toutes les séances de la Roazhon Goal Academy</title>
        <meta 
        title="Retrouvez toutes les séances de la Roazhon Goal Academy"
        name='Roazhon Goal Academy Contact' 
        content="Découvrez les séances de la Roazhon Goal Academy !"
        />
        <meta title='Retrouvez toutes les séances de la Roazhon Goal Academy' name='keywords' content='Séances, Football, Academy, Roazhon Goal Academy, Le Rheu, Rennes, Gardiens de but, spécifiques, jeunes, formation' />
      </Helmet>
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
        <div className="_TitleSubTitle" data-aos="fade-up">
          <h1>Les séances</h1>
          <title>Retrouvez toutes les séances de la Roazhon Goal Academy</title>
          <h3>Tout savoir à propos des séances d'entraînement, du matériel ainsi que des règles de vie de l'Academy.</h3>
        </div>
        <div className="HeroImage">
          <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but__beach_soccer.jpg')} className="Roazhon Goal Academy séance d'entraînement" alt="img" loading="lazy"/>
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
