import express from "express";
import controllerForEvents from "../controllers/eventController.js";
import event from "../models/createEventModel.js";
const router = express.Router();

router.post("/addEvent", controllerForEvents.addEvent, (req, res) => {
  res.status(200).json(res.locals.newEvent);
});

// updateEventsWithYelpResults
// controllerForEvents.updateEventsWithYelpResults
// controllerForEvents.addEventToUser,
// controllerForUsers.getYelpData,

router.get("/getEvents", controllerForEvents.getEvents, (req, res) => {
  res.status(200).json(res.locals.events);
}); // fetchs all event from DB

export default router;
