import React from "react";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

[currUser, setCurrUser] = useState = '';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <LoginForm currUser={currUser} setCurrUser={setCurrUser}/>
    </div>
  )
}

export default Home;