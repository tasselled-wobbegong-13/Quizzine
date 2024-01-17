import React from "react";

const PopulateUsers = ({users, setUsers}) => {
  console.log(users)

  const deleteOnClick = async (e) => {

    const userEmail = e.target.value

    setUsers((users) => users.filter((user, index) => user !== userEmail) );
  }

  return users.map((user, index) => {
    return (
      <div className="userListContainer" >
        <ul className="unorderedList">
          <li className="listItemInUserListContainer" key={index}>
            {user}
            <button className="buttonInListItem" onClick={deleteOnClick} value={user}> X </button>
          </li>
          </ul>
      </div>
    )
  })
}

export default PopulateUsers;