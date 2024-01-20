import React from "react";
import { useEffect } from "react";


const YelpResults = ({yelpApiResults}) => {
    console.log('yelpApiResults', yelpApiResults)
   
    // const events = yelpApiResults.map(yelp => {
    //     // console.log('yelp', yelp)
    //    <div className="yelpEventCard">{yelp}</div>
    // })
    const yelpRes = yelpApiResults.map((yelp, index) => (
        <button className="yelpEventCard" key={yelp['_id']} id={yelp['_id']}>
        {yelp.name}
      </button>
    ))

    return (
        <div className="yelpResultsContainer">
            <div>
            {yelpRes}
            </div>
        </div>
    )
}

export default YelpResults;