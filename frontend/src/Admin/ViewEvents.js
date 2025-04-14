import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaUpload } from 'react-icons/fa';

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: '', date: '', time: '', location: '', description: '', img: null
  });
  const [editId, setEditId] = useState(null);

  const fetchEvents = async () => {
    const res = await axios.get('http://localhost:5000/api/events/all');
    setEvents(res.data);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleChange = (e) => {
    if (e.target.name === 'img') {
      setForm({ ...form, img: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/events/update/${editId}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/events/add', formData);
      }
      setForm({ title: '', date: '', time: '', location: '', description: '', img: null });
      setEditId(null);
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (event) => {
    setEditId(event._id);
    setForm({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description,
      img: null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await axios.delete(`http://localhost:5000/api/events/delete/${id}`);
      fetchEvents();
    }
  };

  return (
    <div className="container py-4">
      {/* Internal Styles */}
      <style>{`
        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .custom-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .table th {
          background-color: #0d6efd;
          color: #fff;
          text-align: center;
        }

        .table td {
          vertical-align: middle;
        }

        .btn-icon {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .table img {
            width: 80px;
            height: auto;
          }
          .btn {
            font-size: 0.8rem;
            padding: 6px 8px;
          }
        }
      `}</style>

      <h2 className="text-center mb-4 fade-in">
        {editId ? '✏️ Update Event' : '➕ Add New Event'}
      </h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="card p-4 mb-5 custom-card fade-in">
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" name="title" className="form-control" placeholder="Event Title" value={form.title} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input type="date" name="date" className="form-control" value={form.date} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input type="text" name="time" className="form-control" placeholder="Time (e.g. 10:00 AM)" value={form.time} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <input type="text" name="location" className="form-control" placeholder="Location" value={form.location} onChange={handleChange} required />
          </div>
          <div className="col-12">
            <textarea name="description" className="form-control" placeholder="Description" rows="3" value={form.description} onChange={handleChange} required />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <label htmlFor="img" className="form-label me-2">
                <FaUpload className="me-1" /> Upload Image:
            </label>
            <input type="file" name="img" className="form-control" onChange={handleChange} accept="image/*" />
            </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-100 align-items-center  btn-icon">
              {editId ? <><FaEdit /> Update Event</> : <><FaPlus /> Add Event</>}
            </button>
          </div>
        </div>
      </form>

      <h2 className="text-center mb-4 fade-in">📅 All Events</h2>

      <div className="table-responsive fade-in">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event._id} className="fade-in">
                <td className="text-center">
                  <img src={`http://localhost:5000/uploads/${event.img}`} alt={event.title} width="100" className="img-thumbnail" />
                </td>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>{event.description}</td>
                <td className="text-center">
                  <button className="btn btn-warning btn-sm me-2 btn-icon" onClick={() => handleEdit(event)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="btn btn-danger btn-sm btn-icon" onClick={() => handleDelete(event._id)}>
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEvents;
