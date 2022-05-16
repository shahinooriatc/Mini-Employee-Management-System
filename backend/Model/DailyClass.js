import mongoose from "mongoose";

const DailySchema = new mongoose.Schema({
  batch: { type: String, required: true },
  time: { type: String, required: true },
  room: { type: String, required: true },
});

let DailyClass = mongoose.model("dailyclass", DailySchema);

export default DailyClass;
