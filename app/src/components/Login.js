import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styling/registration.css';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = () => {
  const [ credentials, setCredentials ] = useState({
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value,
      emailError: '',
      passwordError: ''
    });
  };

  const validate = () => {
    let emailError = '';
    let passwordError = '';

    if (!credentials.email) {
      emailError = 'Email cannot be empty';
    }

    if(!credentials.password) {
      passwordError = 'Password cannot be empty';
    }

    if (emailError || passwordError) {
      setCredentials({
        ...credentials,
        emailError,
        passwordError
      });
      return false;
    } 

    return true;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log(credentials);
    }
    
    // implement post request once backend is deployed
  }

  return(
    <div div className='form_container_login'>
      <div className='form_details'>
        <h1>Welcome Back!</h1>
        <h1>Log In</h1>
        <h3>Don't have an account? <Link className='link' to="/register">Create One</Link></h3>
        <form onSubmit={handleSubmit}>
          <div className='form_input'>  
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              // placeholder='Enter your email'
              value={credentials.email}
              onChange={handleChange}
            />
            <p className='errorMessage'>
              {credentials.emailError}
            </p>
          </div>
          <div className='form_input'> 
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              name='password'
              id='password'
              // placeholder='Please enter a password'
              value={credentials.password}
              onChange={handleChange}
            />
            <p className='errorMessage'>
              {credentials.passwordError}
            </p>
          </div>
          <button className='confirm_button'>Login</button>
        </form>
      </div>
    </div>
  )
  
}

export default Login;