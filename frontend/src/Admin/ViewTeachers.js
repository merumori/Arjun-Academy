import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import EditTeacherModal from "./EditTeacherModal";
import AddTeachers from "./AddTeachers";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const ViewTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [editTeacher, setEditTeacher] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("https://arjun-academy-4c7g.onrender.com/teachers");
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this teacher?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://arjun-academy-4c7g.onrender.com/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher._id !== id));
      alert("Teacher deleted successfully!");
    } catch (error) {
      console.error("Error deleting teacher:", error);
      alert("Failed to delete teacher.");
    }
  };

  const handleEditClick = (teacher) => {
    setEditTeacher({ ...teacher, imagePreview: null });
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTeacher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setEditTeacher((prev) => ({
        ...prev,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleEditSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editTeacher.name);
      formData.append("position", editTeacher.position);
      formData.append("profileLink", editTeacher.profileLink);
      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      await axios.put(`https://arjun-academy-4c7g.onrender.com/teachers/${editTeacher._id}`, formData);
      alert("Teacher updated successfully!");
      setShowEditModal(false);
      fetchTeachers();
    } catch (error) {
      console.error("Error updating teacher:", error);
      alert("Failed to update teacher.");
    }
  };

  return (
    <div
      style={{
        // background: "linear-gradient(135deg, #e3f2fd,rgb(255, 255, 255))",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      <div className="container" style={{ marginTop: "30px" }}>
        {/* Header */}
        <h3
          className="text-center mb-4"
          style={{
            color: "#1d3557",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Teachers Information
        </h3>

        {/* Add Button */}
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn btn-success"
            onClick={() => setShowAddModal(true)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              borderRadius: "10px",
              backgroundColor: "#1bcf5c",
              color: "#ffffff",
              fontSize: "16px",
              transition: "all 0.3s ease",
              boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            <FaPlus style={{ marginRight: "8px" }} /> Add Teacher
          </button>
        </div>

        {/* Table */}
        <div
          className="table-responsive"
          style={{
            borderRadius: "12px",
            overflowX: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Position</th>
                {/* <th>Profile Link</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.length > 0 ? (
                teachers.map((teacher, index) => (
                  <tr key={teacher._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={`https://arjun-academy-4c7g.onrender.com/${teacher.image}`}
                        alt={teacher.name}
                        className="img-thumbnail"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </td>
                    <td>{teacher.name}</td>
                    <td>{teacher.position}</td>
                    {/* <td>
                      <a href={teacher.profileLink} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                    </td> */}
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(teacher)}>
                        <FaEdit />
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(teacher._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No teachers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Edit Teacher Modal */}
        <EditTeacherModal
          show={showEditModal}
          teacher={editTeacher}
          onClose={() => setShowEditModal(false)}
          onChange={handleEditChange}
          onImageChange={handleImageChange}
          onSave={handleEditSave}
        />

        {/* Add Teacher Modal */}
        {showAddModal && (
          <div className="modal show d-block">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Add Teacher</h5>
                  <button onClick={() => setShowAddModal(false)} className="btn-close"></button>
                </div>
                <div className="modal-body">
                  <AddTeachers />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewTeachers;
