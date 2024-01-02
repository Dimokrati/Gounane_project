import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../styles/Admin.css'

export default function AdminDashBoard() {
  return (
    <div className='gi-class'>
      <h1>Admin DashBoard</h1>
      <div className='gi-btn-ctn'>
        <Link className='fil-link' to="/admin/gi"><button className='gi-btn'>GI</button></Link>
        <Link className='fil-link' to="/admin/idsd"><button className='gi-btn'>IDSD</button></Link>
        <Link className='fil-link' to="/admin/isil"><button className='gi-btn'>ISIL</button></Link>
      </div>
      <Outlet />
    </div>
  )
}