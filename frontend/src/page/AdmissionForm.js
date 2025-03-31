import React, { useState } from "react";
import "../css/AdmissionForm.css";
import imgLeft from "../img/school.png";
import imgRight from "../img/child.png";
import img from '../img/arjun.png';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    grade: "",
    parentName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Admission submitted successfully!");
        // Redirect to the home page after the alert
        window.location.href = "/"; // Change "/" to the URL of your home page if necessary
      } else {
        alert("Error in submitting form.");
      }
    } catch (error) {
      alert("Error in submitting form.");
    }
  };

  return (
    <div className="admission-form-container">
      <div className="admission-card d-flex flex-column">
        <div className="title-section d-flex align-items-center justify-content-center">
          <img src={imgLeft} alt="Left Child" className="title-img img-left" />
          <img src={img} alt="Arjun Academy" className="titleimg img-center" />
          <img src={imgRight} alt="Right Child" className="title-img img-right" />
        </div>
        <h3 className="form-title text-center">Admission Form</h3>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input
                type="text"
                id="student-name"
                name="studentName"
                className="form-control"
                placeholder="Enter full name"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
              <input
                type="date"
                id="dob"
                name="dob"
                className="form-control"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-genderless"></i></span>
              <select
                id="gender"
                name="gender"
                className="form-select"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-home"></i></span>
              <textarea
                id="address"
                name="address"
                className="form-control"
                placeholder="Enter address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-phone"></i></span>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-school"></i></span>
              <select
                id="grade"
                name="grade"
                className="form-select"
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Grade</option>
                <option value="nursery">Nursery</option>
                <option value="UKG">UKG</option>
                <option value="LKG">LKG</option>
                <option value="HKG">HKG</option>
                <option value="1">STD 1</option>
                <option value="2">STD 2</option>
                <option value="3">STD 3</option>
                <option value="4">STD 4</option>
                <option value="5">STD 5</option>
                <option value="6">STD 6</option>
                <option value="7">STD 7</option>
                <option value="8">STD 8</option>
              </select>
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
              <input
                type="text"
                id="parent-name"
                name="parentName"
                className="form-control"
                placeholder="Enter parent name"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
