import React from 'react'
import { Link } from 'react-router-dom'

export default function IDSD() {
  return (
    <div className='gi-class'>
      <h1>IDSD Class</h1>
      <div className='gi-btn-ctn'>
        <Link to='/admin/idsd/students'><button className='gi-btn'> Students </button></Link>
        <Link to='/admin/idsd/mcq'><button className='gi-btn'> MCQ </button></Link>
      </div>
    </div>
  )
}
