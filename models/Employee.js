var mongoose = require("mongoose");

var emSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be blank!!"
  },
  dop: {
    type: String,
    required: "Date of birth cannot be blank!!"
  },
  gender: {
    type: String,
    required: "Gender cannot be blank!!"
  },
  completed: {
    type: Boolean,
    default: false
  },
  employeestatus: {
    type: String,
    required: "Employee status must be mentioned!!"
  },
  employeeid: {
    type: Number,
    default: Math.floor(Math.random() * 10 + 1)
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Employee = mongoose.model("Employee", emSchema);
module.exports = Employee;
