const express = require("express");
const pharmacyRoute = require("./routes/pharmaciesRoute");
// const patientRoute = require("./routes/patients");
const doctorRoute = require("./routes/doctorRoute");
const medicineRoute = require("./routes/medicinesRoute");
const authRoute = require("./routes/authRoute");
const pescriptionRoute = require("./routes/pescriptionRoute");
module.exports = () => {
  const app = express.Router();
  pharmacyRoute(app);
  // patientRoute(app);
  doctorRoute(app);
  medicineRoute(app);
  authRoute(app);
  pescriptionRoute(app);
  return app;
};
