const mongoose = require("mongoose");
const searchable = require("mongoose-regex-search");
const validator = require("validator");

const Doctor = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please enter a first name"]
    },
    lastname: {
      type: String,
      required: [true, "Please enter a last name"]
    },

    speciality: {
      // are we going to have a speciality table ?
      type: String,
      required: [true, "Please enter a valid speciality"]
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      validate: value => {
        if (!validator.isEmail(value))
          throw new Error({ error: "Invalid Email adress" });
      }
    },

    image: String,

    lat: Number,
    
    lng :Number,
    
    address: String,
    
    openingHour: String,

    closingHour: String,

    password: { type: String, required: true },
    
    phoneNumber: String,
    
    patients: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Patient" } // should we have this
    ]
  },
  { timestamps: true }
);

Doctor.plugin(searchable);
module.exports = mongoose.model("Doctor", Doctor);
