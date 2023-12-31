import React from 'react'
import "../styles/Login.css"

export default function Login() {

  return (
    <div className='fullpage'>
      <div className='form'>
        <div className='title_ctn' >
          <h3 >Welcome back</h3>
          <p >Welcome back! Please enter your details</p>
        </div>
        
        <div className='inputs_ctn' >
          <input className='email_input' id='email' type='text' placeholder='Email'/>
          <input className='psw_input' id='password' placeholder='Password' type='password'/>
        </div>
        <button className='signin_btn'> Sign in </button>
        <div className='register_link_ctn' >
          <p >Don't have an account?</p>
          <a className='register_link' href='/register' >Register</a>
        </div>
      </div>
    </div>
  )
}
