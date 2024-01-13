import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();
  
  //create form submit functionality: reset use input field, rerender users added
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    await fetch('api/authUser', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(data => data.json())
      .then(jsonData => {
        navigate('/dashboard');
        // console.log('data within handleSubmit in react component -->', jsonData)
      })
      .catch(err => console.log(err)); 
    
  }

  //return the form with email input field, add user button, and rendering of added users
  return (
   <>
    <form onSubmit={handleSubmit}>
  
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      
      <button type="submit">
        Login
      </button>

    </form>
    <Link to="/register"><button>Create an Account</button></Link>
  </>
  )
}

export default LoginForm;
