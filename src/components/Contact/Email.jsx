import React from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Email = () => {
  return (
<div className='container Left'>
    <div className="_TitleSubTitle">
      <h6 className="_BgTitle Left">Email</h6>
      <h3 className="_BgSubTitle Left">Email</h3>
    </div>
    <div className="container Left">
    <div className='Card __primary'>
    <p>roazhongoalacademy@gmail.com</p>
    <div className="quote-wrapper">
      <div className="Check">
      <a href="mailto:roazhongoalacademy@gmail.com?subject=Demande d'informations RGA">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
      </a>
      </div>
    </div>
    <a href="mailto:roazhongoalacademy@gmail.com?subject=Demande d'informations RGA">Contactez-nous</a>  
     </div>
    </div>
  
</div>
  )
}