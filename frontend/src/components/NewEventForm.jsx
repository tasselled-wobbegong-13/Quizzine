import React from "react";

const NewEventForm = () => {
  return (
  <>
    <form>
      <input
        type="text"
        name="newEventName"
        id="newEventName"
        placeholder="ie: jason's birthday, boy's night out"
      />

      <input
        type="text"
        name="address"
        id="address"
        placeholder="123 Pusedostreet"
      />

      <input
        type="text"
        name="date"
        id="date"
        placeholder="date"
      />

      <input
        type="text"
        name="time"
        id="time"
        placeholder="time"
      />

      <button type="submit">Create New Event</button>
    </form>
  </>
  )

}

export default NewEventForm;
