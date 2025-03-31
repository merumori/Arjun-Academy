const Teacher = require('../models/Teacher');
const path = require('path');

// Add a new teacher
const addTeacher = async (req, res) => {
  const { name, position, profileLink } = req.body;
  const originalName = req.file ? req.file.originalname : '';
  const imagePath = req.file ? req.file.path : '';

  if (!name || !position || !profileLink) {
    return res.status(400).json({ message: 'Please provide all fields (name, position, and profileLink)' });
  }

  const newTeacher = new Teacher({
    name,
    position,
    image: imagePath,
    profileLink,
    originalImageName: originalName,
  });

  try {
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } catch (error) {
    console.error('Error adding teacher:', error);
    res.status(400).json({ message: 'Error adding teacher', error });
  }
};

// Get all teachers
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    console.error('Error fetching teachers:', error);
    res.status(500).json({ message: 'Error fetching teachers', error });
  }
};

// Update an existing teacher
const updateTeacher = async (req, res) => {
  const teacherId = req.params.id;

  const updateData = {
    ...req.body,
    image: req.file ? req.file.path : undefined, // Update the image if a new one is uploaded
  };

  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      updateData,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(400).json({ message: 'Error updating teacher', error });
  }
};

// Delete a teacher
const deleteTeacher = async (req, res) => {
  const teacherId = req.params.id;
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
    if (!deletedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting teacher', error });
  }
};

module.exports = { getTeachers, addTeacher, updateTeacher, deleteTeacher };
