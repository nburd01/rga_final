import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';

export const Email = () => {
  const emailData = useSelector((state) => state.contact.data);
  console.log("emailData",emailData.email)

  return (
<div className='container Left'>
    <div className="_TitleSubTitle" data-aos="fade-up">
      <h6 className="_BgTitle Left">Email</h6>
      <h3 className="_BgSubTitle Left">Email</h3>
    </div>
    <div className="container Left">
    <div className='Card __primary' data-aos="fade-up">
    <p>{emailData.email}</p>
    <div className="quote-wrapper">
      <div className="contactIcon">
      <a href={`mailto:${emailData.email}?subject=Demande d'informations RGA`}>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
      </a>
      </div>
    </div>
    <a href={`mailto:${emailData.email}?subject=Demande d'informations RGA`}>Contactez-nous</a>  
     </div>
    </div>
</div>
  )
}