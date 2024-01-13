import React from "react";
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to ="/"> Return to Home Page </Link>
    </div>
  )
}

export default Error;