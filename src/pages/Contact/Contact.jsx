import React from 'react'
import { Email } from '../../components/Contact/Email'
import { Telephone } from '../../components/Contact/telephone'


export const Contact = () => {
  return (
    <div className='contact'>
      <div className="container-large">
      <div className="__intro">

        <div className="PicTitle">
          <div className="_TitleSubTitle" data-aos="fade-up">
            <h1>Contact</h1>
            <h3>Pour tout renseignement, merci de nous contacter par e-mail ou bien par téléphone.</h3>
          </div>
          <div className="HeroImage">
            <img src={require('../../assets/img/galerie/webp/roazhon_goal_academy__gardien_de_but_proprioception.jpg')} className="_HeroImage" alt="img" loading="lazy"/>
          </div>
        </div>
      </div>
      </div>

      <section className="pageBody">
      <Email/>
      <Telephone/>
      </section>
    </div>
  )
}
