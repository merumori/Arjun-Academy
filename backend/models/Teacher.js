// models/Teacher.js

const mongoose = require('mongoose');

// Teacher schema definition
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  profileLink: {
    type: String,
    required: true
  }
});

// Create the Teacher model using the schema
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
