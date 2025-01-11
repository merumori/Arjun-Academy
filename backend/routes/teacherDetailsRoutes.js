const express = require('express');
const teacherDetailsController = require('../controllers/teacherDetailsController');

const router = express.Router();

// Add teacher details with image upload
router.post(
  '/',
  teacherDetailsController.uploadTeacherImages,
  teacherDetailsController.addTeacherDetails
);

// Fetch all teacher details
router.get('/', teacherDetailsController.getAllTeachersDetails);

// Fetch a single teacher by ID
router.get('/:id', teacherDetailsController.getSingleTeacherDetails);

// Update teacher details
router.put('/:id', teacherDetailsController.updateTeacherDetails);

// Delete teacher details
router.delete('/:id', teacherDetailsController.deleteTeacherDetails);

module.exports = router;
