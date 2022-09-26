import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div className="block">
            <a target="_blank" rel="noreferrer" href="https://twitter.com">
                <FontAwesomeIcon icon="fa-brands fa-twitter" size="xl" className="iconsFontAwesome"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                <FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" className="iconsFontAwesome"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" className="iconsFontAwesome"/>
            </a>
          </div>
        </div>
    </footer>
  )
}
