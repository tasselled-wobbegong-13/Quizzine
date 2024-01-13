import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate();
  
  //create form submit functionality: reset use input field, rerender users added
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    await fetch('api/registerUser', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(data => data.json())
      .then(jsonData => {
        // console.log('data within handleSubmit in react component -->', jsonData)
      })
      .catch(err => console.log(err)); 
    navigate('/');
  }

  //return the form with email input field, add user button, and rendering of added users
  return (
   <>
    <form onSubmit={handleSubmit}>
    
    <input
        type="text"
        name="first_name"
        id="first_name"
        placeholder="First Name"
      />

      <input
        type="text"
        name="last_name"
        id="last_name"
        placeholder="Last Name"
      />

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
        Register
      </button>

    </form>
  </>
  )
}

export default RegistrationForm;
