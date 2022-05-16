import express from "express";
import Activity from "../Model/Activity.js";

const activityRouter = express.Router();

activityRouter.post("/", async (req, res) => {
  let activityData = {
    activityName: req.body.activityName,
    hour: req.body.hour,
    details: req.body.details,
  };
  let activity = await new Activity(activityData);
  activity.save();
  res.status(201).send({ msg: "Complete", activity });
});

activityRouter.get("/", async (req, res) => {
  const data = await Activity.find({});
  res.send(data);
});

export default activityRouter;
