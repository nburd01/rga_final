import React from 'react'
import { useState } from 'react';
import {Link } from 'react-router-dom';
import './MainNav.scss'
// import logo from '../../assets/img/logo/logo.jpg'

export const MainNav = () => {

  const [toggleNav, setToggleNav] = useState(false)

  const toggleClick = () => setToggleNav(!toggleNav)


  return (
    <div className="MainNav">
      <Link to="/" className="logoDiv">
        <img className="logo" src={require('../../assets/img/logo/logo.jpg')} alt="logo" />
      </Link>
      <ul className="desktop">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rga">La RGA</Link></li>
        <li><Link to="/inscriptions">Inscriptions</Link></li>
        <li><Link to="/seances">Séances</Link></li>
        <li><Link to="/horaires">Planning & Horaires</Link></li>
        <li><Link to="/multimedia">Multimédia</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      

    <div className={`navbar-links ${toggleNav ? "active" : ""}`}>
      <ul onClick={toggleClick}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rga">La RGA</Link></li>
        <li><Link to="/inscriptions">Inscriptions</Link></li>
        <li><Link to="/seances">Séances</Link></li>
        <li><Link to="/horaires">Planning & Horaires</Link></li>
        <li><Link to="/multimedia">Multimédia</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

      <span className="toggleBtn" onClick={toggleClick} >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
  )
}

