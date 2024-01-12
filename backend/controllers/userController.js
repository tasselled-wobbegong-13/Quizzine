import User from '../models/userModel.js';

const controllerForUsers = {};
// route POST '/'

controllerForUsers.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log('loginUser controller email -->', email);
  console.log('loginUser controller password -->', password);
  console.log('loginUser controller req.body -->', req.body);
  return next();
};

export default controllerForUsers;
