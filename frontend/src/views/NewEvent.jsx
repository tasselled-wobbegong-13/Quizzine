import React from "react";
import NewEventForm from "../components/NewEventForm.jsx";
import AddUserToEvent from "../components/AddUserToEvent.jsx";
import CurrentEvents from "../components/CurrentEvents.jsx";
import YelpResults from "../components/YelpResults.jsx";
import { useState } from "react";

const NewEvent = () => {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]); 
  const [yelpApiResults, setYelpApiResults] = useState([]);  

  return (
    <div className="dashboardContainer">
      <div className="dashboardLeftContainer">
        <AddUserToEvent users={users} setUsers={setUsers} />
        <NewEventForm
          users={users}
          setUsers={setUsers}
          events={events}
          setEvents={setEvents}
        />
      </div>
      <div className="dashboardRightContainer">
        <h1 className="currentEventsHeader">Current Events</h1>
        <CurrentEvents
          events={events}
          yelpResults={yelpResults}
          setYelpResults={setYelpResults}
        />
        <h1 className="yelpResultsHeader">Yelp Results</h1>
        <YelpResults
          yelpResults={yelpResults}
          setYelpResults={setYelpResults}
        />
      </div>
    </div>

    <div className="dashboardRightContainer">
      <h1 className="currentEventsHeader">Current Events</h1>
      <CurrentEvents events={events} setYelpApiResults={setYelpApiResults}/>
      <h1 className="yelpResultsHeader">Yelp Results</h1>
      <YelpResults yelpApiResults={yelpApiResults}/>
    </div>
    </div>
  )
}


export default NewEvent;
