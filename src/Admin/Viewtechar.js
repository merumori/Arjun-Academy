import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ViewTeachers.css";
import EditTeacherModal from "./EditTeacherModal";
import AddTeachers from "./AddTeachers"; // Import AddTeachers component
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // Importing React Icons

const ViewTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [editTeacher, setEditTeacher] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // State for Add Modal
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/teachers");
      setTeachers(response.data);
    } catch (error) {
      console.error("There was an error fetching the teacher data:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this teacher?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:5000/teachers/${id}`);
      if (response.status === 200) {
        alert("Teacher deleted successfully!");
        setTeachers(teachers.filter((teacher) => teacher._id !== id));
      }
    } catch (error) {
      console.error("There was an error deleting the teacher:", error);
      alert("Unable to delete teacher. Please try again.");
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

      const response = await axios.put(
        `http://localhost:5000/teachers/${editTeacher._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        alert("Teacher updated successfully!");
        setShowEditModal(false);
        fetchTeachers();
      }
    } catch (error) {
      console.error("There was an error updating the teacher:", error);
      alert("Unable to update teacher. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Teachers Information</h3>
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-success"
          onClick={() => setShowAddModal(true)}
        >
          <FaPlus /> Add Teacher
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Position</th>
              <th>Profile Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <tr key={teacher._id} className="teacher-row">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`http://localhost:5000/${teacher.image}`}
                      alt={teacher.name}
                      className="img-thumbnail"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{teacher.name}</td>
                  <td>{teacher.position}</td>
                  <td>
                    <a
                      href={teacher.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      View Profile
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => handleEditClick(teacher)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(teacher._id)}
                    >
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

      <EditTeacherModal
        show={showEditModal}
        teacher={editTeacher}
        onClose={() => setShowEditModal(false)}
        onChange={handleEditChange}
        onImageChange={handleImageChange}
        onSave={handleEditSave}
      />

{showAddModal && (
        <div className="modal show d-block" style={{ color: 'white' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '', color: 'white' }}>
                <h5 className="modal-title">Add Teacher</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddModal(false)}
                  style={{ backgroundColor: 'red', color: 'white', borderRadius: '50%' }}
                ></button>
              </div>
              <div className="modal-body">
                <AddTeachers />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ViewTeachers;
