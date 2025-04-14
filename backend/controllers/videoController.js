const Video = require('../models/videoModel');

// Get all videos
const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Insert video
const createVideo = async (req, res) => {
  const { title, url } = req.body;
  try {
    const newVideo = new Video({ title, url });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update video
const updateVideo = async (req, res) => {
  const { id } = req.params;
  const { title, url } = req.body;
  try {
    const updated = await Video.findByIdAndUpdate(id, { title, url }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete video
const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    await Video.findByIdAndDelete(id);
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getVideos,
  createVideo,
  updateVideo,
  deleteVideo
}; // ✅ CommonJS export
