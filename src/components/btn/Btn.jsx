import React from 'react'
import './Btn.scss'
import { Link } from 'react-router-dom';

export const ButtonCTA = () => {
  return (
    <div className="btnContainer">
        <button className="btnText">
            <span>
            <Link to="/inscriptions">Home</Link>  
            </span>
        </button>
    </div>
  )
}