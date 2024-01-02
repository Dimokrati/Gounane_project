import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/student.css'

export default function Isilstudents() {
  return (
    <div className='isil-student'>
        <div>
            <h1>ISIL Students</h1>
            <Link to='/admin/isil/students/add'><button className='gi-btn'>Create Student</button></Link>
            <Link to='/admin/isil/students/student_list'><button className='gi-btn'>Student List</button></Link>
        </div>
        <Outlet/>
    </div>
  )
}
