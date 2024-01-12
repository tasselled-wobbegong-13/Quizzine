import express from 'express';
import controllerForUsers from '../controllers/userController.js';
const router = express.Router();

router.post('/', controllerForUsers.loginUser, (req, res) => {
  res.status(200).json('Success!');
});

export default router;
