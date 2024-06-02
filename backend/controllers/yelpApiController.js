import CreatedNewEvent from '../models/createEventModel.js';
import yelp from 'yelp-fusion';
const apiKey = 'OBTAIN API KEY FROM YELP API FUSION';
const client = yelp.client(apiKey);



const controllerForYelpApi = {};

controllerForYelpApi.getYelpData = async (req, res, next) => {
 
    const { zip_code } = req.body;
    
    client
      .search({
        location: zip_code,
        // offset: '0',
        limit: '4',
      })
      .then((response) => {

        res.locals.businesses = response.jsonBody.businesses;
        return next();
      })
      .catch((e) => {
        console.log('there was an error in the api call for yelp')
        console.log(e);
      });
  };

  controllerForYelpApi.addResultsToEvent = async (req, res, next) => {
    const { _id, allCurEventsArr} = req.body;
    const update = {yelp_results: allCurEventsArr}
    const findEventObj = await CreatedNewEvent.findByIdAndUpdate(_id, update); 
    console.log('event found', findEventObj)
    console.log('allCurEvents', allCurEventsArr)
    return next(); 
  }

export default controllerForYelpApi;


