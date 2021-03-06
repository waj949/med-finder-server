const mongoose = require("mongoose");

const MedicalRecord = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
      unique:true 
    },

    problems: String, //should be revised : structure wise
    medications: String, //should be revised : structure wise
    psychiatric: String, //should be revised : structure wise
    allergirs: String //should be revised : structure wise
  },
  { timestamps: true }
);

module.exports = mongoose.model("MedicalRecord", MedicalRecord);
