import express from 'express';
import controllerForYelpApi from '../controllers/yelpApiController.js'

const router = express.Router();

router.post('/getYelpAPI', controllerForYelpApi.getYelpData, (req, res) => {
    res.status(200).json(res.locals.businesses);
  });

router.post('/addYelpResultsToEvent', controllerForYelpApi.addResultsToEvent, (req, res) => {
  res.status(200).json('results added');
})

export default router;