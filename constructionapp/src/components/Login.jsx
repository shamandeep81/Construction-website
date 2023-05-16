import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
  return (
    <button className='login-button'> <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />LOG IN</button>
  )
}

export default Login