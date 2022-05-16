import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import employeeRouter from "./Routers/EmployeeRouter.js";
import dailyclassRouter from "./Routers/DailyClassRouter.js";
import activityRouter from "./Routers/ActivityRouter.js";
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("monogdb connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/employee", employeeRouter);
app.use("/dailyclass", dailyclassRouter);
app.use("/activity", activityRouter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("8000 port connected");
});
