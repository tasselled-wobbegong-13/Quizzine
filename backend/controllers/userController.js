import User from "../models/userModel.js";
import yelp from "yelp-fusion";
const apiKey =
  "ItLTRWLz_FY3ADZur2BLEUhRmBAWcb_Zqaszn958CQj-a_0SV4VDX9ODpvKzh2WcHSjf_gCH5jNpilDLUBpojCO80oJXhesmFC6Q2ROB_wDnSeiEA2iq5B0ZRTmnZXYx";
const client = yelp.client(apiKey);

const controllerForUsers = {};

controllerForUsers.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("entered loginUser middleware");
  console.log("loginUser controller email -->", email);
  console.log("loginUser controller password -->", password);
  console.log("loginUser controller req.body -->", req.body);
  return next();
};

controllerForUsers.addUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log("entered addUser middleware");
    console.log("addUser controller email -->", email);
    console.log("addUser controller req.body -->", req.body);
    const newUser = await User.create({ email });
    res.locals.newUser = newUser;
    return next();
  } catch (err) {
    console.log(err);
  }
};

controllerForUsers.registerUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    console.log("entered registerUser middleware");
    console.log("addUser controller req.body -->", req.body);
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password,
    });
    res.locals.newUser = newUser;
    return next();
  } catch (err) {
    console.log(err);
  }
};

controllerForUsers.authUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("entered authUser middleware");
    console.log("addUser controller req.body -->", req.body);
    const user = await User.findOne({ email });
    if (password === user.password) {
      // res.locals.user = user;
      return next();
    } else {
      throw Error("Please check credentials and try again");
    }
  } catch (err) {
    console.log(err);
  }
};

controllerForUsers.getYelpData = async (req, res, next) => {
  console.log("req.body from getYelpData --> ", req.body);
  // deconstruct from req body zip code
  const { zip_code } = req.body;
  console.log(zip_code);
  console.log("zip_code in getYelpData controller -->", zip_code);
  client
    .search({
      location: zip_code,
      // offset: '0',
      limit: "6",
    })
    .then((response) => {
      console.log("response within the yelp api call");
      console.log(
        "getyelpdata controler JSON.stringify() results",
        JSON.stringify(response.jsonBody)
      );

      res.locals.businesses = response.jsonBody.businesses;
      return next();
    })
    .catch((e) => {
      console.log("there was an error in the api call for yelp");
      console.log(e);
    });
};

export default controllerForUsers;
