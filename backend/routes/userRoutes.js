import express from 'express';
import controllerForUsers from '../controllers/userController.js';
import User from '../models/userModel.js';
const router = express.Router();

router.post('/', controllerForUsers.loginUser, (req, res) => {
  res.status(200).json('Success!');
});

router.post('/addUserToEvent', controllerForUsers.addUser, (req, res) => {
  res.status(200).json('New Event Added to DB!');
});

router.post('/registerUser', controllerForUsers.registerUser, (req, res) => {
  res.status(200).json('New User Added to DB!');
});

router.post('/authUser', controllerForUsers.authUser, (req, res) => {
  res.status(200).json('User Authorized!');
});

// router.post('/getYelpAPI', controllerForUsers.getYelpData, (req, res) => {
//   res.status(200).json(res.locals.businesses);
// });

export default router;
