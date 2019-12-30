var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/employee-api");

mongoose.Promise = Promise;
module.exports.Employee = require("./Employee");
