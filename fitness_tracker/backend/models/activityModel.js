import mongoose from "mongoose";

const activitySchema = mongoose.Schema(
    {
       date: {
        type: Date,
        required: true,
       },
       time: {
        type: String,  
        required: true,
       },
       activity: {
        type: String,
        required: true,
       },
       duration: {
        type: Number,  
        required: true,
       },
       difficulty: {
        type: String, 
        required: true,
       },
    },
    {
        timestamps: true,
    }
);

export const Activity = mongoose.model('Activity', activitySchema);
