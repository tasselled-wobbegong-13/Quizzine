import React from "react";

const YelpResults = ({ yelpResults, setYelpResults }) => {
  console.log("yelpResult prop from yelpResults component--> ", yelpResults);

  return (
    <div className="yelpResultsContainer">
      <div className="restaurantName"></div>
      <div className="genre"></div>
      <div className="image"></div>
      <div className="rating"></div>
      <div className="price"></div>
      <div className="url"></div>
      <div className="phoneNumber"></div>
    </div>
  );
};

export default YelpResults;
