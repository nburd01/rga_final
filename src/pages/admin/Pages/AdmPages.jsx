import React from 'react'
import { Link, Outlet } from "react-router-dom";
import './AdmPages.scss'

export const AdmPages = () => {
  return (
    <div className='navAndContent'>
      <div className='navPages'>
        <ul>
          <li>
            <Link to="/admin/home"> Home </Link>
          </li>
          <li>
            <Link to="/admin/rga"> La RGA </Link>
          </li>
          <li>
            <Link to="/admin/inscriptions"> Inscriptions </Link>
          </li>
          <li>
            <Link to="/admin/seances"> Séances </Link>
          </li>
          <li>
            <Link to="/admin/planning"> Planning </Link>
          </li>
          <li>
            <Link to="/admin/boutique"> Boutique </Link>
          </li>
          <li>
            <Link to="/admin/contact"> Contact </Link>
          </li>
          <li>
            <Link to="/admin/blog"> Blog </Link>
          </li>
        </ul>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
