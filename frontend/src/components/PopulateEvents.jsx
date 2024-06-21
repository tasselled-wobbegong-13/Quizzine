import React from "react";

// const PopulateEvents = () => {
//   const events = User.findOne({email: 'jason@gmail.com'}, {events})

//   // const deleteOnClick = async (e) => {

//   //   const userEmail = e.target.value

//   //   setUsers((users) => users.filter((user, index) => user !== userEmail) );
//   // }

//   return events.map((events, index) => {
//     return (
//       <div className="userListContainer" >
//         <ul className="unorderedList">
//           <li className="listItemInUserListContainer" key={index}>
//             {user}
//             <button className="buttonInListItem" onClick={deleteOnClick} value={user}> X </button>
//           </li>
//           </ul>
//       </div>
//     )
//   })
// }

const CurrentEvents = ({events}) => {
  console.log('events from currentEvents-->',events)
      const curEvents = events.map((event, index)=> <div className="eventCard" key={index}>{event.newEventName}</div>)
  return (
      <div className="currentEventsContainer">
          {curEvents}
      </div>
  )
}

export default PopulateEvents;

