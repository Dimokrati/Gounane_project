import React from 'react';
import '../styles/Gi.css'
import { Link } from 'react-router-dom';

export default function GI() {
  return (
    <div className='gi-class'>
      <h1>GI Class</h1>
      <div className='gi-btn-ctn'>
        <Link to='/admin/gi/students'><button className='gi-btn'> Students </button></Link>
        <Link to='/admin/gi/mcq'><button className='gi-btn'> MCQ </button></Link>
      </div>
    </div>
  )
}
