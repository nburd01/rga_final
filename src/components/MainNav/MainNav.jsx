import React from 'react'
import { useState } from 'react';
import {Link, NavLink  } from 'react-router-dom';
import './MainNav.scss'

export const MainNav = () => {

  const [toggleNav, setToggleNav] = useState(false)

  const toggleClick = () => setToggleNav(!toggleNav)


  return (
    <div className="MainNav">
      <div className='container'>
        <Link to="/" className="logoDiv"> 
          <img className="logo" src={require('../../assets/img/logo/roazhon_goal_academy_logo.gif')} alt="logo" loading="lazy" />
        </Link>

      <ul className="desktop">
        <li><NavLink to="/" activeClassName="active" activeStyle={{color: "red"}}>Home</NavLink></li>
        <li><NavLink to="/rga" activeStyle={{color: "red"}}>La RGA</NavLink></li>
        <li><NavLink to="/inscriptions" activeStyle={{color: "red"}}>Inscriptions</NavLink></li>
        <li><NavLink to="/seances" activeStyle={{color: "red"}}>Séances</NavLink></li>
        <li><NavLink to="/horaires" activeStyle={{color: "red"}}>Planning & Horaires</NavLink></li>
        {/* <li><Link to="/multimedia">Multimédia</Link></li> */}
        <li><NavLink to="/contact" activeStyle={{color: "red"}}>Contact</NavLink></li>
      </ul>
      

    <div className={`navbar-links ${toggleNav ? "active" : ""}`}>
      <ul onClick={toggleClick}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rga">La RGA</Link></li>
        <li><Link to="/inscriptions">Inscriptions</Link></li>
        <li><Link to="/seances">Séances</Link></li>
        <li><Link to="/horaires">Planning & Horaires</Link></li>
        {/* <li><Link to="/multimedia">Multimédia</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

      <span className="toggleBtn" onClick={toggleClick} >
        <span></span>
        <span></span>
        <span></span>
      </span>
      </div>
    </div>
  )
}

