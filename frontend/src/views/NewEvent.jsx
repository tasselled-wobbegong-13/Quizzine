import React from "react";
import NewEventForm from "../components/NewEventForm.jsx";
import AddUserToEvent from "../components/AddUserToEvent.jsx";

const NewEvent = () => {
  return (
    <div >
      <AddUserToEvent />
      <NewEventForm />
    </div>
  )
}

export default NewEvent; 