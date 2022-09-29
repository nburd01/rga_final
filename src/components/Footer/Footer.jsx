import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <footer>
        <div className="container Center">
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Roazhongoalacademy/">
                <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" className="iconsFontAwesome"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/roazhon-goal-academy-30482b251/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" className="iconsFontAwesome"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.secure.instagram.com/roazhongoalacademy/">
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" className="iconsFontAwesome"/>
            </a>
        </div>
      </div>
    </footer>
  )
}
