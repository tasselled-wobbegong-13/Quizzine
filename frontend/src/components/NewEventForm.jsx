import React from "react";
import { json } from "react-router-dom";

const NewEventForm = ({ users, events, setUsers, setEvents }) => {
  const newUsers = [...users];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !e.target.email.value ||
      !e.target.ZipCode.value ||
      !e.target.newEventName.value ||
      !e.target.date.value ||
      !e.target.time.value
    ) {
      throw Error("All fields must be entered");
    }

    const eventDetails = {
      author: e.target.email.value,
      invited_users: newUsers,
      address: e.target.ZipCode.value,
      newEventName: e.target.newEventName.value,
      date: e.target.date.value,
      time: e.target.time.value,
    };

    await fetch("api/event/addEvent", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    })
      .then((data) => data.json())
      .then((jsonData) => {
        console.log("jsonData from newEventForm.jsx", jsonData);
      })
      .catch((err) => console.log(err));

      await setEvents((prevEvent) => [...prevEvent, eventDetails]);

    setUsers([]);
    e.target.email.value = "";
    e.target.ZipCode.value = "";
    e.target.newEventName.value = "";
    e.target.date.value = "";
    e.target.time.value = "";
  };

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
          name="ZipCode"
          id="ZipCode"
          placeholder="ZipCode"
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
        <button type="submit" className="createEventButton">
          Create New Event
        </button>
      </form>
    </div>
  );
};

export default NewEventForm;
