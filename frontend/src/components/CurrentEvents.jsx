import React from "react";

/*
address: "123 codesmith st"
author: "test1@test.com"
date: "01/15/24"
invited_users: ['test@test.com']
newEventName: "bday"
time: "01/15/24" 
*/

const CurrentEvents = ({events}) => {
    console.log('events from currentEvents-->',events)
        const curEvents = events.map((event, index)=> <div className="eventCard" key={index}>{event.newEventName}</div>)
    return (
        <div className="currentEventsContainer">
            {curEvents}
        </div>
    )
}

export default CurrentEvents; 