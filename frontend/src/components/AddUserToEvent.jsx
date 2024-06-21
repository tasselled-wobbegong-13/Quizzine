import React from "react";
import { useState} from "react";
import PopulateUsers from "./PopulateUsers";
import UserInputForm from "./UserInputForm";

const NewEventForm = ({users, setUsers}) => {
  //create user state, *updating state is async
  // const  [users, setUsers] = useState([]);

  //return the form with email input field, add user button, and rendering of added users
  return (
   <div className="addUsersContainer">
    <UserInputForm users={users} setUsers={setUsers}/>
    <PopulateUsers users={users} setUsers={setUsers}/>
  </div>
  )
}

export default NewEventForm;
