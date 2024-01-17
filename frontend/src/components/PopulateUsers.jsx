import React from "react";

const PopulateUsers = ({users, setUsers}) => {
  console.log(users)

  const handleOnClick = async (e) => {
    console.log('hello')
    console.log(e.target)
  }

  return users.map((user, index) => {
    return (
      <div className="userListContainer" key={index} >
        <ul className="unorderedList">
          <li className="listItemInUserListContainer">
            {user}
            <button className="buttonInListItem" onClick={handleOnClick}> X </button>
          </li>
          </ul>
      </div>
    )
  })
}

export default PopulateUsers;