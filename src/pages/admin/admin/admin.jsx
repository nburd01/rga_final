import React from 'react'
import Sidebar from "../../../adminComponents/sidebar/Sidebar";
import Widget from "../../../adminComponents/widget/Widget";
import './admin.scss'
import { Link, Outlet } from "react-router-dom";


export const Admin = () => {
  return (
    <div className='admin'>
      <div className='category'>
        <h2>Pages</h2>
      </div>
          <Outlet />
    </div>
    );
}
