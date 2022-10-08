import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebase.js'
import {Link, NavLink  } from 'react-router-dom';
import './MainNav.scss'
import { BoutiqueUrl } from '../../props/boutiqueUrl.jsx';

export const MainNav = () => {

  const [toggleNav, setToggleNav] = useState(false)

  const toggleClick = () => setToggleNav(!toggleNav)

  const [boutiques, setBoutiques] = useState([]);
  const boutiquesCollectionRef = collection(db, "boutiques");

  useEffect(() => {
    const getBoutiques = async () => {
      const data = await getDocs(boutiquesCollectionRef);
      console.log("data",data)
      setBoutiques(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getBoutiques()
  }, [])




  return (
    <div className="MainNav">
      <div className='container'>
        <Link to="/" className="logoDiv"> 
          <img className="logo" src={require('../../assets/img/logo/roazhon_goal_academy_logo.gif')} alt="logo" loading="lazy" />
        </Link>

      <ul className="desktop">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/rga">La RGA</NavLink></li>
        <li><NavLink to="/inscriptions">Inscriptions</NavLink></li>
        <li><NavLink to="/seances">Séances</NavLink></li>
        <li><NavLink to="/horaires">Planning & Horaires</NavLink></li>
        <li key={boutiques}>{boutiques.map((boutique) => {
          return (
            <a href={boutique.url} target="_blank" rel="noreferrer">Boutique</a>
          )
        })}
        </li>
        {/* <li><Link to="/multimedia">Multimédia</Link></li> */}
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      
    <div className={`navbar-links ${toggleNav ? "active" : ""}`}>
      <ul onClick={toggleClick}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rga">La RGA</Link></li>
        <li><Link to="/inscriptions">Inscriptions</Link></li>
        <li><Link to="/seances">Séances</Link></li>
        <li><Link to="/horaires">Planning & Horaires</Link></li>
        <li key={boutiques}>{boutiques.map((boutique) => {
          return (
            <a href={boutique.url} target="_blank" rel="noreferrer">Boutique</a>
          )
        })}
        </li>
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

