import Event from '../models/createEventModel.js';

const controllerForEvents = {};


controllerForEvents.addEvent = async (req, res, next) => {
  // try{
  //   const { email } = req.body;
  // console.log('entered addEvent middleware')
  // console.log('addUser controller req.body -->', req.body);
  // const newUser = await Event.create({email})
  // res.locals.newUser = newUser;
  // return next();
  // } catch (err) {
  //   console.log(err); 
  // }

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

export default controllerForEvents;
