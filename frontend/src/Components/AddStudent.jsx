import React from 'react'
import { Link } from 'react-router-dom'



export default function AddStudent() {
  return (
    <div className='register_leftside'>
      <div className='fullpage'>
        <div className='form'>
          <div className='title_ctn'>
            <h3>Create account</h3>
            <p >Get access to exclusive features by creating an account</p>
          </div>
          <div className='inputs_ctn'>
            <input className='email_input' type="text" id="fullname" placeholder="First name"/>
            <input className='email_input' type="text" id="fullname" placeholder="Last name"/>
            <input className='email_input' type="text" id="email" placeholder="Email"/>
            <input className='psw_input' id="password" placeholder="Password"/>
          </div>
          <button className='signin_btn'>
            Create my account
          </button>
          <div className='register_link_ctn'>
            <p>Already have an account?</p>
            <Link to='/login' className='register_link'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
