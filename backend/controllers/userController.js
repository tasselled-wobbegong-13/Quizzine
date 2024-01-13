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

controllerForUsers.authUser = async (req, res, next) => {
  try{
    const { email, password } = req.body;
  console.log('entered authUser middleware')
  console.log('addUser controller req.body -->', req.body);
  const user = await User.findOne({email})
  if(password === user.password) {
  // res.locals.user = user;
    return next();
  }
  else {
    throw Error('Please check credentials and try again')
  }
  } catch (err) {
    console.log(err); 
  }
};

export default controllerForUsers;
