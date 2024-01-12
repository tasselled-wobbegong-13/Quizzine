import React from "react";

const populateUsers = (users) => {
  console.log('users in populate users', users)
  return users.map((user, index) => {
    return (
      <li key={index}>
        {user}
      </li>
    )
  })
}

export default populateUsers;