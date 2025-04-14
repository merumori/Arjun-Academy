import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaVideo, FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoManager = () => {
  const [videos, setVideos] = useState([]);
  const [formData, setFormData] = useState({ title: '', url: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/videos');
      setVideos(res.data);
    } catch (err) {
      console.error('Error fetching videos:', err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const convertToEmbedUrl = (url) => {
    const youtubeMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    const shortMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?&]+)/);

    if (youtubeMatch && youtubeMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    if (shortMatch && shortMatch[1]) {
      return `https://www.youtube.com/embed/${shortMatch[1]}`;
    }

    return url; // fallback if already embed or unsupported
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedForm = {
        ...formData,
        url: convertToEmbedUrl(formData.url),
      };

      if (editingId) {
        await axios.put(`http://localhost:5000/api/videos/${editingId}`, updatedForm);
      } else {
        await axios.post('http://localhost:5000/api/videos', updatedForm);
      }

      setFormData({ title: '', url: '' });
      setEditingId(null);
      fetchVideos();
    } catch (err) {
      console.error('Error saving video:', err.message);
    }
  };

  const handleEdit = (video) => {
    setFormData({ title: video.title, url: video.url });
    setEditingId(video._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this video?')) {
      try {
        await axios.delete(`http://localhost:5000/api/videos/${id}`);
        fetchVideos();
      } catch (err) {
        console.error('Error deleting video:', err.message);
      }
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary fw-bold">
        <FaVideo className="me-2" />
        School Event Video Manager
      </h2>

      <form onSubmit={handleSubmit} className="row g-2 mb-4 shadow-sm p-3 bg-light rounded">
        <div className="col-md-5">
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            placeholder="Video Title"
            required
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            name="url"
            className="form-control"
            value={formData.url}
            onChange={handleChange}
            placeholder="YouTube URL (watch?v= or youtu.be)"
            required
          />
        </div>
        <div className="col-md-2 d-grid">
          <button type="submit" className={`btn ${editingId ? 'btn-warning' : 'btn-success'}`}>
            <FaPlus className="me-1" />
            {editingId ? 'Update' : 'Add'} Video
          </button>
        </div>
      </form>

      <div className="row">
        {videos.map((video) => (
          <div key={video._id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 video-card">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary btn-sm" onClick={() => handleEdit(video)}>
                    <FaEdit className="me-1" /> Edit
                  </button>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(video._id)}>
                    <FaTrashAlt className="me-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internal CSS */}
      <style>{`
        .video-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        iframe {
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoManager;
