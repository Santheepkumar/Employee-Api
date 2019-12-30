var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helper/EmployeeHelper");

router
  .route("/")
  .get(helpers.getEmployee)
  .post(helpers.createEmployee);

router
  .route("/:employeeId")
  .put(helpers.updateEmployee)
  .delete(helpers.deleteEmployee);

module.exports = router;
