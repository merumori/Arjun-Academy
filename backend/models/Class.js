const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String }, // Image file path
  time: { type: String, required: true },
  description: { type: String, required: true },
  class_size: { type: String, required: true },
  age_range: { type: String, required: true },
  tuition_fee: { type: String, required: true },
  link: { type: String, required: true }
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
