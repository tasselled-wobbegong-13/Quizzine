import React from "react";
import {useState} from "react";


const UserInputForm = () => {
  
  //create form submit functionality: update state adding new user input, reset use input field, rerender users added
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("e.target.addMembers.value: ", e.target.addMembers.value);
    await setUsers((prevUsers) => [...prevUsers, e.target.addMembers.value]);
    e.target.addMembers.value = "";
  }

  //return the form with email input field, add user button, and rendering of added users
  return (
   <>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="addMembers"
        id="addMembers"
        placeholder="person123@fakemail.net"
      />
      
      <button >
        Add User to Event
      </button>

    </form>

    {populateUsers(users)}

  </>
  )
}

export default UserInputForm;
