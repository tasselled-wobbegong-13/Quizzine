import React from "react";

const PopulateEvents = ({currUser}) => {
  // event = User.findOne({email: currUSer}, {events})
  //events = user.events

  // const deleteOnClick = async (e) => {

  //   const userEmail = e.target.value

  //   setUsers((users) => users.filter((user, index) => user !== userEmail) );
  // }

  return users.map((user, index) => {
    return (
      <div className="userListContainer" >
        <ul className="unorderedList">
          <li className="listItemInUserListContainer" key={index}>
            {user}
            <button className="buttonInListItem" onClick={deleteOnClick} value={user}> X </button>
          </li>
          </ul>
      </div>
    )
  })
}

export default PopulateEvents;

// const CurrentEvents = ({events}) => {
//   console.log('events from currentEvents-->',events)
//       const curEvents = events.map((event, index)=> <div className="eventCard" key={index}>{event.newEventName}</div>)
//   return (
//       <div className="currentEventsContainer">
//           {curEvents}
//       </div>
//   )
// }