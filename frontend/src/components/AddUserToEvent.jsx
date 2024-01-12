import React from "react";
import { useState } from "react";

const NewEventForm = () => {

  const  [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUsers = (prevUsers) => {
      return setUsers(...users, e.target[0].value);
      <li>e.target[0].value</li>
    }
    return newUsers();
  }

  return (
   <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="addMemembers"
        id="addMemebers"
        placeholder="person123@fakemail.net"
      />
      
      <button >
        Add User to Event
      </button>

      <ul>
        {/* <li>{users}</li> */}
        {users}
      </ul>

    </form>
  </>
  )

}

export default NewEventForm;
