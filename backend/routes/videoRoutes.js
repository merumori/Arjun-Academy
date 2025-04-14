const express = require('express');
const {
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo
} = require('../controllers/videoController');

const router = express.Router();

router.get('/', getVideos);
router.post('/', createVideo);
router.put('/:id', updateVideo);
router.delete('/:id', deleteVideo);

module.exports = router; // ✅ Correct CommonJS export
