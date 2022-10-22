import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebase.js'
import {Link, Navigate, NavLink, useNavigate  } from 'react-router-dom';
import './MainNav.scss'
import { AuthModeContext } from '../../context/AuthContext.js';
import '../../components/btn/NavBtn.scss'


export const MainNav = () => {

  const [toggleNav, setToggleNav] = useState(false)
  const { dispatch } = useContext(AuthModeContext);
  const toggleClick = () => setToggleNav(!toggleNav)
  const navigate = useNavigate();
  const [boutiques, setBoutiques] = useState([]);
  const boutiquesCollectionRef = collection(db, "boutiques");
  const {currentUser} = useContext(AuthModeContext);
  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/multimedia"/>
  };
  console.log("currentUser MainNav",currentUser)


  function UrlFirstChild() {
    console.log("Hello World",boutiques);
    return (
      <>
      {boutiques.map((boutique, index) => {
        return (
          <a key={index} href={boutique.url} target="_blank" rel="noreferrer">Boutique</a>
        )
        })}
        </>
    );
  };

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
          <img className="logo" src={require('../../assets/img/logo/roazhon_goal_academy_logo.gif')} alt="logo de la Roazhon Goal Academy" loading="lazy" />
        </Link>

      <ul className="desktop">
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/rga">La RGA</NavLink></li>
        <li><NavLink to="/inscriptions">Inscriptions</NavLink></li>
        <li><NavLink to="/seances">Séances</NavLink></li>
        <li><NavLink to="/horaires">Planning & Horaires</NavLink></li>
        {/* <li><a href={UrlFirstChild}>Boutique</a></li> */}
        <li><a href="https://www.clickandsport.fr/content/131-roazhon-goal-academy" target="_blank" rel="noreferrer">Boutique</a></li>
        <li><Link to="/multimedia">Multimédia</Link></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      <>
      {currentUser
        ?
        <div className="btnContainer">
        <a onClick={() => dispatch({ type: "LOGOUT" })}className="btn">
          <svg width="fill-content" height="5em">
            <defs>
                <linearGradient id="grad1">
                    <stop offset="0%" stop-color="#242b2e"/>
                    <stop offset="50%" stop-color="#242b2e"/>
                    <stop offset="100%" stop-color="#ff7e00" />
                </linearGradient>
            </defs>
            <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="150" height="50"/> 
          </svg>
          <p>Se déconnecter</p>
        </a>
      </div>
        :
        <></>
       
      }
      </>

      
    <div className={`navbar-links ${toggleNav ? "active" : ""}`}>
      <ul onClick={toggleClick}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rga">La RGA</Link></li>
        <li><Link to="/inscriptions">Inscriptions</Link></li>
        <li><Link to="/seances">Séances</Link></li>
        <li><Link to="/horaires">Planning & Horaires</Link></li>
        {/* <li><a href={UrlFirstChild}>Boutique</a></li> */}
        <li><a href="https://www.clickandsport.fr/content/131-roazhon-goal-academy" target="_blank" rel="noreferrer">Boutique</a></li>
        <li><Link to="/multimedia">Multimédia</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div>
        
      </div>
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

