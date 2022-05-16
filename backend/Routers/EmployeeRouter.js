import Employee from "../Model/Employee.js";
import express from "express";

const employeeRouter = express.Router();

employeeRouter.post("/", async (req, res) => {
  let empolyeedata = {
    name: req.body.name,
    designation: req.body.designation,
    officetime: req.body.officetime,
    offday: req.body.offday,
    phone: req.body.phone,
  };
  let employee = await new Employee(empolyeedata);
  employee.save();
  res.status(201).send({ msg: "Complete", employee });
});

employeeRouter.get("/", async (req, res) => {
  const data = await Employee.find({});
  res.send(data);
});

export default employeeRouter;
