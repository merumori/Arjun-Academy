import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
  { id: 1, title: 'Sample Video 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 2, title: 'Sample Video 2', url: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 3, title: 'Sample Video 3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 4, title: 'Sample Video 4', url: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 5, title: 'Sample Video 5', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 6, title: 'Sample Video 6', url: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 7, title: 'Sample Video 7', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 8, title: 'Sample Video 8', url: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 9, title: 'Sample Video 9', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: 10, title: 'Sample Video 10', url: 'https://www.w3schools.com/html/movie.mp4' }
];

const VideoEvent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={styles.page}>
      {/* Heading with continuous animation */}
      <motion.h2
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: [1, 0.8, 1],
          y: [0, -5, 0],
          scale: [1, 1.05, 1],
          backgroundColor: ['#ff7f50', '#ff6347', '#ff7f50']
        }}
        transition={{
          duration: 3,
          repeat: Infinity, // Repeat animation continuously
          ease: 'easeInOut'
        }}
      >
        🎥 School Event Videos 🎥
      </motion.h2>

      {/* Video Cards */}
      <div style={styles.container}>
        {videos.map((video) => (
          <motion.div
            key={video.id}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedVideo(video)}
          >
            {/* Thumbnail Container */}
            <div style={styles.thumbnailWrapper}>
              <video style={styles.thumbnail} src={video.url} />
              {/* Play Button */}
              <motion.div
                style={styles.playButton}
                whileHover={{ scale: 1.2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                ▶
              </motion.div>
            </div>
            <h5 style={styles.title}>{video.title}</h5>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            style={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              style={styles.popup}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.span
                style={styles.closeBtn}
                whileHover={{ rotate: 90, color: '#ff4d4d' }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </motion.span>
              {/* Video Title */}
              <h5 style={styles.popupTitle}>{selectedVideo.title}</h5>
              {/* Video Player */}
              <video
                src={selectedVideo.url}
                controls
                style={styles.popupVideo}
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Styles
const styles = {
  page: {
    backgroundColor: '#f0f8ff',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    minHeight: '100vh'
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '20px',
    padding: '10px',
    background: 'linear-gradient(45deg, orange, red)',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    width: '250px',
    transition: 'transform 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  thumbnailWrapper: {
    position: 'relative',
    width: '100%',
    height: '140px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#000'
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '50%',
    color: '#ffffff',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer'
  },
  title: {
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  },
  popup: {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    width: '80%',
    maxWidth: '600px',
    position: 'relative'
  },
  popupVideo: {
    width: '100%',
    borderRadius: '8px'
  },
  closeBtn: {
    position: 'absolute',
    top: '8px',
    right: '12px',
    fontSize: '24px',
    color: '#555',
    cursor: 'pointer'
  },
  popupTitle: {
    marginBottom: '12px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  }
};

export default VideoEvent;
