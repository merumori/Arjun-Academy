import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const AddTeachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    position: "",
    image: null,
    profileLink: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setNewTeacher((prev) => ({
        ...prev,
        image: file,
      }));
      setErrorMessage("");
    } else {
      setErrorMessage("Only PNG and JPG images are allowed!");
      setNewTeacher((prev) => ({
        ...prev,
        image: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTeacher.image) {
      alert("Please select a valid image!");
      return;
    }

    const formData = new FormData();
    formData.append("name", newTeacher.name);
    formData.append("position", newTeacher.position);
    formData.append("image", newTeacher.image);
    formData.append("profileLink", newTeacher.profileLink);

    try {
      const response = await axios.post("https://arjun-academy-ijou.onrender.com/teachers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Teacher added successfully!");
        setNewTeacher({
          name: "",
          position: "",
          image: null,
          profileLink: "",
        });
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("There was an error adding the teacher. Please try again.");
    }
  };

  return (
    <section style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh", padding: "20px", boxSizing: "border-box" }}>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            margin: "auto",
            width: "100%",
            background: "linear-gradient(145deg, rgb(35, 204, 136) 0%, rgb(142, 207, 53) 100%)", // Linear gradient background
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ color: "#fff" }}>
              Teacher Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={newTeacher.name}
              onChange={handleInputChange}
              placeholder="Enter teacher's name"
              required
              style={{ fontSize: "1rem" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label" style={{ color: "#fff" }}>
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              className="form-control"
              value={newTeacher.position}
              onChange={handleInputChange}
              placeholder="Enter teacher's position"
              required
              style={{ fontSize: "1rem" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label" style={{ color: "#fff" }}>
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-control"
              onChange={handleImageChange}
              required
              style={{ fontSize: "1rem" }}
            />
            {errorMessage && <p style={{ color: "red", marginTop: "10px", fontSize: "0.9rem", textAlign: "center" }}>{errorMessage}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="profileLink" className="form-label" style={{ color: "#fff" }}>
              Profile Link
            </label>
            <input
              type="text"
              id="profileLink"
              name="profileLink"
              className="form-control"
              value={newTeacher.profileLink}
              onChange={handleInputChange}
              placeholder="Enter profile link"
              required
              style={{ fontSize: "1rem" }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)", border: "none", height: "60px" }} // Removed duplicate height key
          >
            <i className="fa fa-plus-circle" style={{ marginRight: "10px" }}></i> Add Teacher
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddTeachers;
