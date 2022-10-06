import React from 'react'
import { Link, Outlet } from "react-router-dom";
import './AdmPages.scss'

export const AdmPages = () => {
  return (
    <div className='navAndContent'>
      <div className='navPages'>
        <ul>
          <li>
            <Link to="/admin/pages/home"> Home </Link>
          </li>
          <li>
            <Link to="/admin/pages/rga"> La RGA </Link>
          </li>
          <li>
            <Link to="/admin/pages/inscriptions"> Inscriptions </Link>
          </li>
          <li>
            <Link to="/admin/pages/seances"> Séances </Link>
          </li>
          <li>
            <Link to="/admin/pages/planning"> Planning </Link>
          </li>
          <li>
            <Link to="/admin/pages/boutique"> Boutique </Link>
          </li>
          <li>
            <Link to="/admin/pages/contact"> Contact </Link>
          </li>
        </ul>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
