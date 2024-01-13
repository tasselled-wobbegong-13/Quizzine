import User from '../models/userModel.js';

const controllerForUsers = {};


controllerForUsers.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log('entered loginUser middleware')
  console.log('loginUser controller email -->', email);
  console.log('loginUser controller password -->', password);
  console.log('loginUser controller req.body -->', req.body);
  return next();
};

controllerForUsers.addUser = async (req, res, next) => {
  try{
    const { email } = req.body;
  console.log('entered addUser middleware')
  console.log('addUser controller email -->', email);
  console.log('addUser controller req.body -->', req.body);
  const newUser = await User.create({email})
  res.locals.newUser = newUser;
  return next();
  } catch (err) {
    console.log(err); 
  }
};

controllerForUsers.registerUser = async (req, res, next) => {
  try{
    const { first_name, last_name, email, password } = req.body;
  console.log('entered registerUser middleware')
  console.log('addUser controller req.body -->', req.body);
  const newUser = await User.create({first_name, last_name, email, password})
  res.locals.newUser = newUser;
  return next();
  } catch (err) {
    console.log(err); 
  }
};

export default controllerForUsers;
