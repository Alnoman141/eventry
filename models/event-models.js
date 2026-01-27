import mongoose, { Schema } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    // date: { type: Date, required: true },
    location: { type: String, required: true },
    details: { type: String, required: true },
    imageUrl: { type: String, required: false },
    interested_ids: { type: [String], required: false },
    going_ids: { type: [String], required: false },
    swags: { type: [String], required: false },
});

export const eventModel = mongoose.models.events ?? mongoose.model("events", schema);