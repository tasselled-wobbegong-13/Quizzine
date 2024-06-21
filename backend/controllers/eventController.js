import CreatedNewEvent from "../models/createEventModel.js";
import User from "../models/userModel.js";

const controllerForEvents = {};

controllerForEvents.addEvent = async (req, res, next) => {

  try{
    //Create the event document in mongoDB.
    const event = req.body;
    const newEvent = await CreatedNewEvent.create(event);

    //make sure author and all users invited have the event id in their document.
    //will be used during authentication to populate whats been saved for their events. 
    const eventId = newEvent._id.toString();
    const allUsersArr = [newEvent.author, ...newEvent.invited_users];
    console.log('allUsers -->',allUsersArr)

    for(let emailStr of allUsersArr){
        const filter = {email : emailStr}; 
        const update = {event_id : eventId};
        await User.findOneAndUpdate(filter, update, {
          new: true,
          upsert: true,
          // Return additional properties about the operation, not just the document
          includeResultMetadata: true
        })
    }
    res.locals.newEvent = newEvent;

    return next();
  } catch (err) {
    return next({ err: "err at addEvent" });
  }
};

// controllerForEvents.addEventToUser = async (req, res, next) => {
//   console.log("entered addEventToUser middleware");
//   try {
//     const newEvent = res.locals.newEvent;
//     const users = res.locals.newEvent.invited_users;
//     // console.log('invited_users: ', res.locals.newEvent.invited_users)
//     // console.log('res.locals.newEvent._id: ', res.locals.newEvent._id)

//     for (const user of invited_users) {
//       await User.updateOne({ email: user }, { $push: { events: newEvent } });
//     }
//     return next();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

controllerForEvents.getEvents = async (req, res, next) => {
  console.log('entered getevents middleware')
    try{
      const events = await CreatedNewEvent.find({});
      console.log('events in getEvents', events)
      res.locals.events = events;
      return next();
    } catch (err) {
      return next({err: 'err at addEvent'})
    }
  };
  
  controllerForEvents.removeEvent = async (req, res, next) => {
    // console.log('req body in controllerForEvents.removeEvent', req.body)
      try{
        const removeEventCard = await CreatedNewEvent.deleteOne({_id: req.body._id});
        res.locals.removedCard = removeEventCard; 
        return next();
      } catch (err) {
        return next({err: 'err at addEvent'})
      }
    };

export default controllerForEvents;
