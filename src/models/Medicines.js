const mongoose = require("mongoose");
const searchable = require("mongoose-regex-search");

const Medicine = new mongoose.Schema(
  {
    name: { type: String, searchable: true, required: true },
    medicineClass: { type: String, required: true },
    cost: { type: String, required: true }, //should it be string or number
    administrationRoute: { type: String, required: true },
    dosageForm: { type: String, required: true },
    dosageschedule: { type: String, required: true },
    medicineUnit: { type: String, required: true },
    expiringDay: { type: Date, required: true },
    prescriptionStatus: { type: String, required: true }, //should it be boolean  ?
    code: { type: String, required: true },
    warning: { type: String, required: true },
    sameAs: { type: String, required: true }, //should be id ?
    quantity: { type: String, required: true },
    pharmacyId: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy", defaut: [] } //required: true ,unique:true } // should be tested
    ]
  },
  {
    toJson: { virtuals: true },
    toObject: { virtuals: true }
  },
  { timestamps: true }
);
Medicine.plugin(searchable);
module.exports = mongoose.model("Medicine", Medicine);
