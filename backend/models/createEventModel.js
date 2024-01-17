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
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }

})

const CreatedNewEvent = mongoose.model('CreatedNewEvent', newEventSchema);

export default CreatedNewEvent;