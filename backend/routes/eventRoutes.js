// backend/routes/eventRoutes.js
const express = require('express');
const multer = require('multer');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

// Set up multer for local uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

router.post('/add', upload.single('img'), createEvent);
router.get('/all', getEvents);
router.put('/update/:id', upload.single('img'), updateEvent);
router.delete('/delete/:id', deleteEvent);

module.exports = router;
