import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ViewAdmissions.css";

const ViewAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response = await fetch("http://localhost:5000/admissions");
        if (response.ok) {
          const data = await response.json();
          setAdmissions(data);
        } else {
          alert("Error fetching admissions data.");
        }
      } catch (error) {
        console.error("Error fetching admissions:", error);
        alert("Error fetching admissions data.");
      }
    };

    fetchAdmissions();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/admissions/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Record deleted successfully.");
        setAdmissions((prevAdmissions) =>
          prevAdmissions.filter((admission) => admission._id !== id)
        );
      } else {
        const errorMessage = await response.text();
        alert(`Error deleting record: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      alert("Error deleting record.");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #1bcf5c, #3e9cf7)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="container" style={{ marginTop: "130px" }}>
        <div
          className="d-flex justify-content-between align-items-center mb-4"
          style={{
          
            padding: "10px 20px",
            borderRadius: "8px",
          }}
        >
          <span
            onClick={() => navigate("/admin")}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px",
              display: "flex",
              alignItems: "right",
              color: "#000",
            }}
          >
     <button
  style={{
    fontSize: "20px",
    height: "50px",
    border: "2px solid white",
    marginTop: "-56px",
    borderRadius: "15px",
    padding: "10px 20px",
    textAlign: "center",
    backgroundImage: "linear-gradient(135deg, rgb(35, 204, 136), rgb(142, 207, 53))",
    color: "black",
    cursor: "pointer",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)", // Button shadow
    transition: "all 0.3s ease-in-out", // Smooth transition for hover effect
    alignItems:"center"
  }}
  onMouseOver={(e) => {
    e.target.style.transform = "scale(1.1)"; // Button grows slightly on hover
    e.target.style.boxShadow = "6px 6px 15px rgba(0, 0, 0, 0.4)"; // Stronger shadow
  }}
  onMouseOut={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "4px 4px 10px rgba(0, 0, 0, 0.3)"; // Reset shadow
  }}
>
 ←Go Back
</button>


           
          </span>
          
        </div>
        <h3 className="admission-heading" style={{fontWeight:"bold",}}>Admission Applications</h3>
        <div className="table-responsive">
          <table className="table table-striped table-bordered bg-white">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Grade</th>
                <th>Parent Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.length > 0 ? (
                admissions.map((admission, index) => (
                  <tr key={admission._id}>
                    <td>{index + 1}</td>
                    <td>{admission.studentName}</td>
                    <td>{admission.dob}</td>
                    <td>{admission.gender}</td>
                    <td>{admission.address}</td>
                    <td>{admission.phone}</td>
                    <td>{admission.email}</td>
                    <td>{admission.grade}</td>
                    <td>{admission.parentName}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(admission._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="text-center">
                    No admissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAdmissions;
