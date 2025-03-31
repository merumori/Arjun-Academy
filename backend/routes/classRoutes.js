const express = require('express');
const multer = require('multer');
const path = require('path');
const { getAllClasses, insertClass, updateClass, deleteClass } = require('../controllers/classController');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage, fileFilter: (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  if (extName) return cb(null, true);
  cb('Error: Images only (JPG, JPEG, PNG)!');
}});

// Routes
router.get('/classes', getAllClasses);
router.post('/classes', upload.single('image'), insertClass);
router.put('/classes/:id', upload.single('image'), updateClass);
router.delete('/classes/:id', deleteClass);

module.exports = router;
