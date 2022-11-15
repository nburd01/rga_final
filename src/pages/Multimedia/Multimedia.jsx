import React from 'react'
import { Photos } from '../../components/Multimedia/Photos'
import { Presse } from '../../components/Multimedia/Presse'
import { Videos } from '../../components/Multimedia/Videos'
import { Helmet } from 'react-helmet-async';

export const Multimedia = () => {
  return (
    <div className='multimedia'>
      <Helmet>
        <title>Roazhon Goal Academy : photos et vidéos</title>
        <meta 
        name='description' 
        content="Accédez à la page multimédia de la Roazhon Goal Academy et découvrez les photos, les vidéos et les articles à propos de nous !"
      />
        <link rel='canonical' href="/multimedia"/>
      </Helmet>
      <div className="container-large">
      <div className="__intro">

      <div className="PicTitle">
      <div className="_TitleSubTitle" data-aos="fade-up">
        <h1>Le coin multimédia</h1>
        <h3>Découvrez les photos, vidéos de la Roazhon Goal Academy et bien plus encore. </h3>
      </div>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but_explications.jpg')} className="_HeroImage" alt="Roazhon Goal Academy coaching" loading="lazy"/>
      </div>
      </div>
    </div>
    </div>
    <div >
      <Photos/>
    </div>
    {/* <div >
      <Videos/>
    </div>
    <div >
      <Presse/>
    </div> */}
  </div>
  )
}
