const TeacherDetails = require('../models/TeacherDetails');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the "uploads" directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Setup multer storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store images in the "uploads" directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware to upload multiple images
exports.uploadTeacherImages = upload.array('images', 5); // Limit to 5 images

// Add a new teacher (with image upload)
exports.addTeacherDetails = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debug request body
    console.log("Uploaded files:", req.files); // Debug uploaded files

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files were uploaded' });
    }

    const teacherDetails = new TeacherDetails({
      name: req.body.name,
      age: req.body.age,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      website: req.body.website,
      experience: req.body.experience,
      interviewLink: req.body.interviewLink,
      aboutMe: req.body.aboutMe,
      facebookLink: req.body.facebookLink,
      twitterLink: req.body.twitterLink,
      instagramLink: req.body.instagramLink,
      linkedinLink: req.body.linkedinLink,
      images: req.files.map(file => file.path),
    });

    await teacherDetails.save();
    res.status(201).json({ message: 'Teacher details added successfully', teacherDetails });
  } catch (error) {
    console.error("Error in addTeacherDetails:", error.stack);
    res.status(500).json({ message: 'Error adding teacher details', error: error.message });
  }
};

// Fetch all teachers
exports.getAllTeachersDetails = async (req, res) => {
  try {
    const teachers = await TeacherDetails.find(); // Fetch all teacher records
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch teachers', error });
  }
};

// Fetch a single teacher by ID
exports.getSingleTeacherDetails = async (req, res) => {
  try {
    const teacher = await TeacherDetails.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch teacher', error });
  }
};

// Update teacher details
exports.updateTeacherDetails = async (req, res) => {
  try {
    const updatedTeacher = await TeacherDetails.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the updated fields
    });

    if (!updatedTeacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    res.status(200).json({ message: 'Teacher details updated successfully', updatedTeacher });
  } catch (error) {
    res.status(500).json({ message: 'Error updating teacher details', error });
  }
};

// Delete a teacher
exports.deleteTeacherDetails = async (req, res) => {
  try {
    const teacher = await TeacherDetails.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    // Remove associated images from the filesystem
    teacher.images.forEach(image => {
      if (fs.existsSync(image)) {
        fs.unlinkSync(image);
      }
    });

    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting teacher', error });
  }
};
