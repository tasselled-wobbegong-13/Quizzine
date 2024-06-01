import mongoose from 'mongoose';
const { Schema } = mongoose; 

const newEventSchema = new Schema({
    author: {
        type: String, 
        required: true
    },
    invited_users: {
        type: Array,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    newEventName: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    yelp_results: {
        type: Array,
    }
})

const CreatedNewEvent = mongoose.model('CreatedNewEvent', newEventSchema);

export default CreatedNewEvent;