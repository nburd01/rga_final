import React from 'react'
import './admin.scss'
import { Link, Outlet } from "react-router-dom";


export const Admin = () => {
  return (
    <div className='admin'>
      <div className='category'>
      <Link to="/admin/pages">Pages</Link>
      </div>
          <Outlet />
    </div>
    );
}
