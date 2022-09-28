import React from 'react'
import { ContactComp } from '../../components/Contact/ContactComp'


export const Contact = () => {
  return (
    <page className='contact'>
      <div className="block">
      <div className="PicTitle">
      <div className="_TitleSubTitle">
        <h1>Contact</h1>
        <h3>Pour tout renseignement, merci de nous contacter par e-mail ou bien par téléphone.</h3>
      </div>
      <div className="HeroImage">
        <img src={require('../../assets/img/galerie/webp/home8.webp')} className="_HeroImage" alt="img" loading="lazy"/>
      </div>
      </div>
    </div>
    <div >
      <ContactComp/>
    </div>
  </page>
  )
}
