import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./css/ViewAdmissions.css"; // Import custom CSS for animations and extra styling

const ViewAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);

  // Fetch admissions data from the backend
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

  // Delete admission record
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
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
    <div className="view-admissions-container container mt-4">
      <h3 className="text-center title-animation mb-4">Admission Applications</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered animate-table">
          <thead className="thead-dark">
            <tr>
              <th>id</th>
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
                <tr key={admission._id} className="fade-in-row">
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
  );
};

export default ViewAdmissions;
