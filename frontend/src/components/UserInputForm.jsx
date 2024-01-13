import React from "react";

const UserInputForm = ({ users, setUsers }) => {
  
  //create form submit functionality: reset use input field, rerender users added
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = e.target.addMembers.value;
    await setUsers((prevUsers) => [...prevUsers, newUser]);
    e.target.addMembers.value = "";
    //make subsequent call server with same endpoint
    
    await fetch('api/addUserToEvent', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: newUser})
    })
      .then(data => data.json())
      .then(jsonData => {
        // console.log('data within handleSubmit in react component -->', jsonData)
      })
      .catch(err => console.log(err)); 
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
        Invite User to Event
      </button>

    </form>
  </>
  )
}

export default UserInputForm;
