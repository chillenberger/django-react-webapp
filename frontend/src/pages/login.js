import React from 'react'
import {LoginForm} from '../components/forms'

const air = 'https://www.aevumspace.com/static/Aevum_Air_Cargo.jpeg';

export default function Login() {
  return (
    <>
      <div className='mainHeader'>
        <div className='imageContainer'>
          <img src={air} className='image'/>
        </div>
        <hr/>
        <div className='formContainer'>
          <LoginForm/>
        </div>
      </div>
      <div></div>
    </>
  )
}
