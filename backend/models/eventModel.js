// backend/models/eventModel.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  location: String,
  description: String,
  img: String  // store filename or path
});

module.exports = mongoose.model('Event', eventSchema);
