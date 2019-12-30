var db = require("../models");

exports.getEmployee = (req, res) => {
  db.Employee.find()
    .then(Employees => {
      res.json(Employees);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.createEmployee = (req, res) => {
  db.Employee.create(req.body).then(newEmployee => {
    res.status(201).json(newEmployee);
  });
};

exports.updateEmployee = (req, res) => {
  db.Employee.findOneAndUpdate({ _id: req.params.employeeId }, req.body, {
    new: true
  })
    .then(employee => {
      res.json(employee);
    })
    .catch(err => {
      res.send(err);
    });
};

exports.deleteEmployee = (req, res) => {
  db.Employee.remove({ _id: req.params.employeeId })
    .then(() => {
      res.json({ message: "Employee Records are Deleted" });
    })
    .catch(err => res.send(err));
};

module.exports = exports;
