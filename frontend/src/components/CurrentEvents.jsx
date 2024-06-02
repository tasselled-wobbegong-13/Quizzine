import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const CurrentEvents =  ( { events, setEvents, setYelpApiResults} ) => {

  const [eventResultdata, seteventResultdata] = useState([])
  
  //useEffect rerenders the screen when the events state gets update. 
  //when this happens we use the state setter function to set the eventResultData with 
  //the most current eventData which is mapped and displayed on the UI. 
  //Is there a more efficient way to display the data? 

  useEffect(() => {
    try {
    fetch('/api/event/getEvents')
    .then(eventData => eventData.json())
    .then(eventDataJson => {
      // console.log('eventDataJson within currentEvents.jsx component',eventDataJson);
      seteventResultdata([...eventDataJson])
    })
    .catch((err) => console.log(err));
  } catch(err){
    console.log(err)
  }
  }, [events])


  //calls yelp api to get results
  const handleClickYelpResults = async (e) => {  

    //this for loop may be slowing down the results popping out
    for(let i = 0; i < eventResultdata.length; i+=1){  
      if(e.target.id === eventResultdata[i]['_id']) {
        // console.log(eventResultdata[i]['address'])
        fetch('api/yelpApi/getYelpAPI', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id : e.target.id,  zip_code : eventResultdata[i]['address'] }),
        })
          .then((yelpResults) => yelpResults.json())
          .then((response) => {
              // console.log('response from yelp results', response)
              setYelpApiResults([...response])
            }
          )
          .catch((error) => console.log(error));
        };
      };

      //make an api call here to add api data to the event...
          fetch('api/yelpApi/addYelpResultsToEvent', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({_id : e.target.id, allCurEventsArr: eventResultdata}),
          })
          .then(results => results.json())
          .then(resultsData => console.log('resultData from fetch request addYelpResultsToEvent', resultsData))
          .catch(err => console.log(err)); 

    };

    //removes card from current events
    const handleRemoveCardClick = async (e) => {
      e.preventDefault();
      console.log('event in handleRemoveCardClick', e.target.id)
      fetch('/api/event/removeEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id : e.target.id}),
      })
      .then(results => results.json())
      .then(resultsJson => {
        console.log(resultsJson)
        //utilizing setEvents to cause useEffect to re-render the screen 
        //after deleting the eventCard from the database within the eventController. 
          setEvents([])
       }
      )
      .catch(err => console.log(err))
    }
 
  
  const curEvents = eventResultdata.map((event, index) => (
      <button className="eventCard" key={event['_id']} id={event['_id']} onClick={handleClickYelpResults}>
        <div onClick={handleRemoveCardClick} id={event['_id']} className='removeCardButton'>X</div>
        <h2 className='eventCardHeader'>{event.newEventName}</h2>
        <div className='eventCardTimeAndDateDiv'>
        <span>{event.date} - </span>
        <span>{event.time}</span>
        </div>
    </button>
  ));

  return <div className="currentEventsContainer">{curEvents}</div>;
};

export default CurrentEvents;

