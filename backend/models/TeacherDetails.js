const mongoose = require('mongoose');

const teacherDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  website: String,
  experience: String,
  interviewLink: String,
  aboutMe: String,
  images: [String], // Array of image paths
  facebookLink: String,
  twitterLink: String,
  instagramLink: String,
  linkedinLink: String,
});

module.exports = mongoose.model('TeacherDetails', teacherDetailsSchema);
