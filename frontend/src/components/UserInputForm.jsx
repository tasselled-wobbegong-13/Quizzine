import React from "react";

const UserInputForm = ({ users, setUsers }) => {
  
  //create form submit functionality: reset use input field, rerender users added
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      
      <button type="submit">
        Add User to Event
      </button>

    </form>
  </>
  )
}

export default UserInputForm;
