import React from 'react'
import Register from '../Components/Register';
import '../styles/RegisterPage.css';
import myimage from '../pictures/pic2.jpg'

export default function RegisterPage() {
  return (
    <div className='register_page'>
      <div className='left_side'>
        <Register />
      </div>
      <div className='right_side'>
        <img src={myimage} alt='null' />
      </div>
    </div>
  )
}