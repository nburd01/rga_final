import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux';

export const Telephone = () => {
  const emailData = useSelector((state) => state.contact.data);
  console.log("emailData",emailData.téléphone)
  return (
<div className='container Right'>
    <div className="_TitleSubTitle" data-aos="fade-up">
      <h6 className="_BgTitle Right">Téléphone</h6>
      <h3 className="_BgSubTitle Right">Téléphone</h3>
    </div>
    <div className="container Right">
    <div className='Card __primary' data-aos="fade-up">
    <div className="quote-wrapper">
      <div className="contactIcon">
          <FontAwesomeIcon icon="fa-solid fa-phone" />
      </div>
    </div>
     <a href="tel:06-88-35-04-98">06-88-35-04-98</a>
     <p>{emailData.téléphone}</p>
     </div>
    </div>
  </div>
  )
}