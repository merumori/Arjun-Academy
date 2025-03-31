import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash, FaSave, FaTimes, FaPlus, FaChalkboardTeacher } from 'react-icons/fa';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [editData, setEditData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleEdit = (classItem) => {
    setEditData(classItem);
    setShowPopup(true);
    setNewImage(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        await axios.delete(`http://localhost:5000/api/classes/${id}`);
        fetchClasses();
      } catch (error) {
        console.error('Error deleting class:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(editData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (newImage) {
      formData.append('image', newImage);
    }

    try {
      await axios.put(`http://localhost:5000/api/classes/${editData._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchClasses();
      setShowPopup(false);
    } catch (error) {
      console.error('Error updating class:', error);
    }
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold d-flex align-items-center">
          <FaChalkboardTeacher className="me-2 text-success" /> Classes Data
        </h2>
        <button
          className="btn btn-success d-flex align-items-center"
          onClick={() => navigate('/admin/InsertClass')}
        >
          <FaPlus className="me-2" /> New Class
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-success text-center">
            <tr>
              {['#', 'Title', 'Image', 'Class Time', 'Description', 'Class Size', 'Age Range', 'Tuition Fee', 'Action'].map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem, index) => (
              <tr key={classItem._id} className="align-middle text-center">
                <td>{index + 1}</td>
                <td>{classItem.title}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={`http://localhost:5000${classItem.image}`} 
                      alt={classItem.title}
                      className="rounded me-2"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                    <FaChalkboardTeacher
                      className="text-primary"
                      style={{ fontSize: '24px' }}
                      title="Class Icon"
                    />
                  </div>
                </td>
                <td>{classItem.time}</td>
                <td>{classItem.description}</td>
                <td>{classItem.class_size}</td>
                <td>{classItem.age_range}</td>
                <td>₹{classItem.tuition_fee}</td>
                {/* <td>
                  <a href={classItem.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                    View
                  </a>
                </td> */}
                <td>
                  <FaEdit
                    className="text-warning me-2 cursor-pointer"
                    onClick={() => handleEdit(classItem)}
                    title="Edit"
                  />
                  <FaTrash
                    className="text-danger cursor-pointer"
                    onClick={() => handleDelete(classItem._id)}
                    title="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Popup */}
      {showPopup && editData && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h4 className="mb-3">Edit Class</h4>
            <form onSubmit={handleSubmit}>
              {Object.entries(editData)
                .filter(([key]) => key !== '_id' && key !== '__v' && key !== 'image')
                .map(([key, value]) => (
                  <div key={key} className="mb-3">
                    <label className="form-label">{key.replace('_', ' ')}</label>
                    <input
                      type={key === 'tuition_fee' || key === 'class_size' ? 'number' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                ))}
              {/* Image Upload */}
              <div className="mb-3">
                <label className="form-label">Upload New Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
                {newImage && (
                  <div className="mt-2">
                    <img src={URL.createObjectURL(newImage)} alt="Preview" className="img-thumbnail" style={{ width: '100px', height: '100px' }} />
                  </div>
                )}
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  <FaSave className="me-1" /> Save
                </button>
                <button type="button" onClick={() => setShowPopup(false)} className="btn btn-danger">
                  <FaTimes className="me-1" /> Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Internal CSS */}
      <style>
        {`
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050;
          }
          .popup-content {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
          }
          .cursor-pointer {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Classes;
