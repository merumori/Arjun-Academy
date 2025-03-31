const Class = require('../models/Class');
const path = require('path');
const fs = require('fs');

// Get all classes
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve classes', error });
  }
};

// Insert a new class
exports.insertClass = async (req, res) => {
  try {
    console.log("File received:", req.file); // Debugging
    console.log("Request body:", req.body); // Debugging

    const { title, time, description, class_size, age_range, tuition_fee, link } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null; // Store image path

    const newClass = new Class({ title, image, time, description, class_size, age_range, tuition_fee, link });
    await newClass.save();

    res.status(201).json(newClass);
  } catch (error) {
    console.error("Insert Error:", error);
    res.status(500).json({ message: "Failed to insert class", error });
  }
};

// Update class
exports.updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    let updateData = req.body;

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedClass = await Class.findByIdAndUpdate(id, updateData, { new: true });

    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update class', error });
  }
};

// Delete class
exports.deleteClass = async (req, res) => {
  try {
    const classToDelete = await Class.findById(req.params.id);
    if (classToDelete.image) {
      const imagePath = path.join(__dirname, '..', classToDelete.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete class', error });
  }
};
