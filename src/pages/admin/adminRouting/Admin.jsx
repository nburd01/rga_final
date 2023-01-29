import React from 'react'
import './admin.scss'
import './AdmPages.scss'
import { NavLink, Outlet } from "react-router-dom";


export const AdminRouting = () => {
  console.log("Outlet", Outlet.length)
  return (
    <div className='navAndContent'>
      <div className='navPages'>
        <ul>
          <li>
            <NavLink to="/admin/blog"> Blog </NavLink>
          </li>
          <li>
            <NavLink to="/admin/boutique"> Boutique </NavLink>
          </li>
          <li>
            <NavLink to="/admin/contact"> Contact </NavLink>
          </li>
          <li>
            <NavLink to="/admin/document"> Document </NavLink>
          </li>
          <li>
            <NavLink to="/admin/photos"> Photos </NavLink>
          </li>

        </ul>
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
    );
}
