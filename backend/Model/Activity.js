import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  activityName: { type: String, required: true },
  hour: { type: String, required: true },
  details: { type: String, required: true },
});

let Activity = mongoose.model("activity", activitySchema);

export default Activity;
