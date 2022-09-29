import React from 'react'
import './Btn.scss'
import { Link } from 'react-router-dom';

export const ButtonCTA = () => {
  return (
    <div className="btnContainer">
       <Link to="/inscriptions">
          <button className="btnText"><p>Nous rejoindre</p></button>
        </Link>
    </div>
  )
}