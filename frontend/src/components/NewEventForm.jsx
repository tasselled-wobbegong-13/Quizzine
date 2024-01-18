import React from "react";

const NewEventForm = ({users, events, setUsers, setEvents}) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventDetails = {
      author: e.target.email.value,
      invited_users: users,
      address: e.target.address.value,
      newEventName: e.target.newEventName.value,
      date: e.target.date.value,
      time: e.target.time.value
    }

    console.log('eventDetails Obj --> ',eventDetails)
    console.log('invited_users array -->', eventDetails['invited_users'])

    setEvents(prevEvent => [...prevEvent, eventDetails]); 
    // console.log('events state --> ',events)

    setUsers([]);
    e.target.email.value = '';
    e.target.address.value = '';
    e.target.newEventName.value = '';
    e.target.date.value = '';
    e.target.time.value = '';

    // await fetch('api/event/addEvent', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(eventDetails)
    // })
    //   .then(data => data.json())

    //   .catch(err => console.log(err)); 
  }

  return (
  <div className="createEventContainer">
    <form className="createEventForm" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Coordinator's email:"
        className="creatEventInput1"
      />

      <input
        type="text"
        name="newEventName"
        id="newEventName"
        placeholder="ex: Jason's Birthday"
        className="creatEventInput2"
      />

      <input
        type="text"
        name="address"
        id="address"
        placeholder="123 Codesmith St"
        className="creatEventInput3"
      />

      <input
        type="text"
        name="date"
        id="date"
        placeholder="Date"
        className="creatEventInput4"
      />

      <input
        type="text"
        name="time"
        id="time"
        placeholder="Time"
        className="creatEventInput5"
      />
      <button type="submit" className="createEventButton">Create New Event</button>
    </form>
  </div>
  )

}

export default NewEventForm;
