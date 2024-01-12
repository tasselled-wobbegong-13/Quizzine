import React from "react";
import NewEventForm from "../components/NewEventForm.jsx";
import AddUserToEvent from "../components/AddUserToEvent.jsx";

const NewEvent = () => {
  return (
    <>
      <NewEventForm />
      <AddUserToEvent />
    </>
  )
}

export default NewEvent;