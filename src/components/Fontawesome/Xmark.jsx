import React from 'react'
import './Check.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Xmark = () => {
  return (
    <div className="quote-wrapper">
      <div className="Xmark">
        <FontAwesomeIcon icon="fa-solid fa-xmark"/>
      </div>
    </div>
  )
}
