import express from 'express';
import controllerForEvents from '../controllers/eventController.js';
import event from '../models/createEventModel.js';
const router = express.Router();


router.post('/addEvent', controllerForEvents.addEvent,controllerForEvents.addEventToUser, (req, res) => {
  res.status(200).json(res.locals.newEvent);
});

router.get('/getEvents', controllerForEvents.getEvents, (req, res) => {
  res.status(200).json(res.locals.events);
});

export default router;
