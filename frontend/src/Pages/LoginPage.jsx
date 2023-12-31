import React from 'react'
import Login from '../Components/Login';
import '../styles/LoginPage.css';
import myimage from '../pictures/pic2.jpg'

export default function LoginPage() {
  return (
    <div className='login_page'>
      <div className='left_side'>
        <Login />
      </div>
      <div className='right_side'>
        <img src={myimage} alt='null' />
      </div>
    </div>
  )
}
