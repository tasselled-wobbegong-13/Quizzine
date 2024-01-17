import React from 'react';

/*
address: "123 codesmith st"
author: "test1@test.com"
date: "01/15/24"
invited_users: ['test@test.com']
newEventName: "bday"
time: "01/15/24" 
*/

const CurrentEvents = ({ events }) => {
  const handleClick = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        mode: 'cors',
        Authorization:
          'Bearer ItLTRWLz_FY3ADZur2BLEUhRmBAWcb_Zqaszn958CQj-a_0SV4VDX9ODpvKzh2WcHSjf_gCH5jNpilDLUBpojCO80oJXhesmFC6Q2ROB_wDnSeiEA2iq5B0ZRTmnZXYx',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
    };
    fetch(
      `https://api.yelp.com/v3/businesses/search?sort_by=best_match&location=10001&limit=20`,
      options
    )
      .then((response) => response.json())
      //   .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  console.log('events from currentEvents-->', events);
  const curEvents = events.map((event, index) => (
    <button className="eventCard" key={index} onClick={handleClick}>
      {event.newEventName}
    </button>
  ));
  return <div className="currentEventsContainer">{curEvents}</div>;
};

export default CurrentEvents;
