import React from 'react'

import {SubmitButton} from './buttons'


function LoginForm() {
  return (
    <>
      <form id="loginFormContainer">
        <input
          type="text"
          id='username'
          name='username'
          value='Username'/>
        <br/>
        <input
          type="text"
          id='password'
          name='passord'
          value='Password'/>
        <SubmitButton
          title="Submit"/>
      </form>
    </>
  )
}

export {LoginForm}
