// backend/controllers/eventController.js
const Event = require('../models/eventModel');

// CREATE
exports.createEvent = async (req, res) => {
  try {
    const { title, date, time, location, description } = req.body;
    const img = req.file ? req.file.filename : '';
    const newEvent = new Event({ title, date, time, location, description, img });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
exports.updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = { ...req.body };
    if (req.file) {
      updateData.img = req.file.filename;
    }
    const updated = await Event.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
exports.deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    await Event.findByIdAndDelete(id);
    res.status(200).json({ message: 'Event deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
