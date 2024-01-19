import CreatedNewEvent from '../models/createEventModel.js'
import User from '../models/userModel.js';

const controllerForEvents = {};


controllerForEvents.addEvent = async (req, res, next) => {
  try{
    const event = req.body;
    
    console.log('addEvent in eventController req.body--->', req.body);
    console.log('event--->', event);

    const newEvent = await CreatedNewEvent.create(event);
    console.log('newEvent in addEvent within controllerForEvents', newEvent)
    res.locals.newEvent = newEvent;

    return next();

  } catch (err) {
    return next({err: 'err at addEvent'})
  }
};

controllerForEvents.addEventToUser = async (req, res, next) => {
  console.log('entered addEventToUser middleware')
  // try{
  //   const {_id, invited_users} = res.locals.newEvent;
  //   console.log('invited_users: ', res.locals.newEvent.invited_users)
  //   console.log('res.locals.newEvent._id: ', res.locals.newEvent._id)
    
  //   for(const user of invited_users) {
  //     await User.updateOne(
  //       {email: user},
  //       {$push: {events: _id}}
        // );
      // }
    return next();
  // } catch (err) {
  //   console.log(err); 
  // }
};

controllerForEvents.getEvents = async (req, res, next) => {
  console.log('entered getevents middleware')
    try{
      const events = await CreatedNewEvent.find({});
      res.locals.events = events;
      return next();
    } catch (err) {
      return next({err: 'err at addEvent'})
    }
  };
  

export default controllerForEvents;
