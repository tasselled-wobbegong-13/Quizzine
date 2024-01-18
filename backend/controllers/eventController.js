import Event from '../models/createEventModel.js';
import User from '../models/userModel.js';

const controllerForEvents = {};


controllerForEvents.addEvent = async (req, res, next) => {
  try{
    const event = req.body;
    
    console.log('req.body--->', req.body);
    console.log('event--->', event);

    const newEvent = await Event.create(event);

    res.locals.newEvent = newEvent;

    return next();

  } catch (err) {
    return next({err: 'err at addEvent'})
  }
};

controllerForEvents.getEvents = async (req, res, next) => {
console.log('entered getevents middleware')
  try{
    const events = await Event.find({});
    res.locals.events = events;
    return next();

  } catch (err) {
    return next({err: 'err at addEvent'})
  }
};


controllerForEvents.addEventToUser = async (req, res, next) => {
  console.log('entered addEventToUser middleware')
  try{
    const {_id, invited_users} = res.locals.newEvent;
    invited_users.map((user) => {
      User.updateOne(
        {email: user},
        {$push: {events: _id}}
        );
      })
    return next();
  } catch (err) {
    console.log(err); 
  }
};

export default controllerForEvents;
