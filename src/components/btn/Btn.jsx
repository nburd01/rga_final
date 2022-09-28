import React from 'react'
import './Btn.scss'
import { Link } from 'react-router-dom';

export const ButtonCTA = () => {
  return (
    <div className="btnContainer">
       <Link to="/inscriptions">
          <button className="btnText"><h5>Nous rejoindre</h5></button>
        </Link>
    </div>
  )
}