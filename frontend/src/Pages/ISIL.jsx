import React from 'react'
import { Link } from 'react-router-dom'

export default function ISIL() {
  return (
    <div className='gi-class'>
      <h1>ISIL Class</h1>
      <div className='gi-btn-ctn'>
        <Link to='/admin/isil/students'><button className='gi-btn'> Students </button></Link>
        <Link to='/admin/isil/mcq'><button className='gi-btn'> MCQ </button></Link>
      </div>
    </div>
  )
}
