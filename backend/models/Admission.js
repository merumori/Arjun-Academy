const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  parentName: {
    type: String,
    required: true,
  },
});

const Admission = mongoose.model("Admission", admissionSchema);

module.exports = Admission;
