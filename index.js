PORT = 7000;
var express = require("express");
app = express();
var EmployeeRoutes = require("./routes/router");
bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello there from root");
});
app.use("/api/Employee", EmployeeRoutes);

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
