import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  officetime: { type: String, required: true },
  offday: { type: String, required: true },
  phone: { type: Number, required: true },
});

let Employee = mongoose.model("employe", EmployeeSchema);

export default Employee;
