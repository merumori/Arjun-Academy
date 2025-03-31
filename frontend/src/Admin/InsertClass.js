import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InsertClass = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    time: '',
    description: '',
    class_size: '',
    age_range: '',
    tuition_fee: '',
    link: ''
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      await axios.post('https://arjun-academy-ijou.onrender.com/api/classes', formDataObj, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Class inserted successfully!');
      navigate('/admin/viewClasses');
    } catch (error) {
      console.error('Error inserting class:', error);
      alert('Failed to insert class');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Insert Class</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className="form-control" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Image Upload</label>
          <input type="file" name="image" accept="image/jpeg, image/png" onChange={handleFileChange} className="form-control" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Class Time</label>
          <input type="text" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Class Size</label>
          <input type="text" name="class_size" value={formData.class_size} onChange={handleChange} className="form-control" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Age Range</label>
          <input type="text" name="age_range" value={formData.age_range} onChange={handleChange} className="form-control" required />
        </div>

        <div className="col-md-6">
          <label className="form-label">Tuition Fee</label>
          <input type="text" name="tuition_fee" value={formData.tuition_fee} onChange={handleChange} className="form-control" required />
        </div>

        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" rows="3" required></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Link</label>
          <input type="text" name="link" value={formData.link} onChange={handleChange} className="form-control" required />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Insert Class</button>
        </div>
      </form>
    </div>
  );
};

export default InsertClass;
