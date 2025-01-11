const express = require('express');
const { getTeachers, addTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherController');
const multer = require('multer');
const path = require('path'); // Import the path module

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${timestamp}${fileExtension}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only .png and .jpg files are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });

// Create an Express Router
const router = express.Router();

// Routes
router.get('/', getTeachers);
router.post('/', upload.single('image'), addTeacher); // POST route for adding a teacher
router.put('/:id', upload.single('image'), updateTeacher); // Update with optional image
router.delete('/:id', deleteTeacher);

module.exports = router;
