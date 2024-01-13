import React from "react";

const PopulateUsers = ({users}) => {
  // console.log('users in populate users', users)
  return users.map((user, index) => {
    return (
      <li key={index}>
        {user}
      </li>
    )
  })
}

export default PopulateUsers;