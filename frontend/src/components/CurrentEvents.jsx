import React from "react";
import { useState } from "react";
import { useEffect } from "react";

/*
address: "123 codesmith st"
author: "test1@test.com"
date: "01/15/24"
invited_users: ['test@test.com']
newEventName: "bday"
time: "01/15/24" 
*/


const CurrentEvents =  ({ events, setYelpApiResults}) => {
  console.log('events prop in CurrentEvents', events)
  const [eventResultdata, seteventResultdata] = useState([])
  // console.log('events prop within currentEvents.jsx component',events)
  useEffect(() => {
    try {
    fetch('/api/event/getEvents')
    .then(eventData => eventData.json())
    .then(eventDataJson => {
      console.log('eventDataJson within currentEvents.jsx component',eventDataJson);
      seteventResultdata([...eventDataJson])
    })
    .catch((err) => console.log(err));
  } catch(err){
    console.log(err)
  }
  }, [events])


  // events

  // if(eventResultdata[0]) console.log('eventResultdata from currentEvents.jsx component', eventResultdata)
  // if(eventResultdata[0]) console.log('eventResultdata[0] from currentEvents.jsx component', eventResultdata[0])

     
  const handleClick = async (e) => {    
    console.log('e.target.id', e.target.id)
    console.log('eventResultdata', eventResultdata)
    console.log('currentEvents component events -->', eventResultdata);

    // console.log('id currentEvents component events -->', eventResultdata[0]['_id']);
    for (let i = 0; i < eventResultdata.length; i += 1) {
      if (e.target.id === eventResultdata[i]["_id"]) {
        console.log(eventResultdata[i]["address"]);
        fetch("api/user/getYelpAPI", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ zip_code: eventResultdata[i]["address"] }),
        })
          .then((yelpResults) => yelpResults.json())
          .then((response) => {

              console.log('response from yelp results', response)
              setYelpApiResults([...response])
            }
          )

          .catch((error) => console.log(error));
      }
    }

  //is this best practice to include the id generated within the event object into the button so we can match above?
  const curEvents = events.map((event, index) => (
    <button
      className="eventCard"
      key={event["_id"]}
      id={event["_id"]}
      onClick={handleClick}
    >
      {event.newEventName}
    </button>
  ));

  return <div className="currentEventsContainer">{curEvents}</div>;
};

export default CurrentEvents;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     mode: 'cors',
//     Authorization:
//       'Bearer ItLTRWLz_FY3ADZur2BLEUhRmBAWcb_Zqaszn958CQj-a_0SV4VDX9ODpvKzh2WcHSjf_gCH5jNpilDLUBpojCO80oJXhesmFC6Q2ROB_wDnSeiEA2iq5B0ZRTmnZXYx',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET',
//   },
// };
// fetch(
//   `https://api.yelp.com/v3/businesses/search?sort_by=best_match&location=10001&limit=20`,
//   options
// )
//   .then((response) => response.json())
//   //   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
