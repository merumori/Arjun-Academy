import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewAdmissions = () => {
  const [admissions, setAdmissions] = useState([]);

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
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        const response = await fetch(`http://localhost:5000/admissions/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setAdmissions(admissions.filter((admission) => admission._id !== id));
        } else {
          alert("Error deleting record.");
        }
      } catch (error) {
        console.error("Error deleting record:", error);
        alert("Error deleting record.");
      }
    }
  };

  const styles = {
    container: {
      background: "linear-gradient(to right, #e6f0ff, #f4f7fe)",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
    },
    header: {
      color: "#1d3557",
      fontWeight: "600",
      fontSize: "28px",
      borderBottom: "3px solid #457b9d",
      paddingBottom: "10px",
      display: "inline-block",
      marginBottom: "20px",
      animation: "fadeIn 0.8s ease-in-out",
    },
    tableWrapper: {
      borderRadius: "12px",
      overflowX: "auto", // Allow horizontal scroll
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      animation: "slideIn 0.6s ease-in-out",
    },
    table: {
      width: "100%",
      backgroundColor: "#ffffff",
      borderCollapse: "collapse",
      minWidth: "1000px", // Prevent table from squeezing on smaller screens
    },
    th: {
      backgroundColor: "#457b9d",
      color: "#ffffff",
      padding: "14px",
      fontSize: "16px",
      fontWeight: "500",
      textAlign: "left",
      position: "sticky",
      top: "0",
      zIndex: "10",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "14px",
      color: "#333333",
      borderBottom: "1px solid #e0e0e0",
      fontSize: "14px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    actionButton: {
      backgroundColor: "#e63946",
      color: "#ffffff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease, transform 0.2s ease",
      fontSize: "14px",
      fontWeight: "500",
    },
    actionButtonHover: {
      backgroundColor: "#d62828",
      transform: "translateY(-2px)",
    },
    noData: {
      padding: "20px",
      textAlign: "center",
      color: "#999999",
      fontSize: "16px",
    },
    rowHover: {
      backgroundColor: "#f9f9f9",
      transition: "background 0.3s ease",
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    '@keyframes slideIn': {
      from: { transform: 'translateY(-20px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <h3 style={styles.header}>Admission Applications</h3>
        <div style={styles.tableWrapper}>
          <table style={styles.table} className="table table-striped table-bordered">
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Student Name</th>
                <th style={styles.th}>Date of Birth</th>
                <th style={styles.th}>Gender</th>
                <th style={styles.th}>Address</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Grade</th>
                <th style={styles.th}>Parent Name</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.length > 0 ? (
                admissions.map((admission, index) => (
                  <tr
                    key={admission._id}
                    style={{ cursor: "pointer" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        styles.rowHover.backgroundColor)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{admission.studentName}</td>
                    <td style={styles.td}>{admission.dob}</td>
                    <td style={styles.td}>{admission.gender}</td>
                    <td style={styles.td}>{admission.address}</td>
                    <td style={styles.td}>{admission.phone}</td>
                    <td style={styles.td}>{admission.email}</td>
                    <td style={styles.td}>{admission.grade}</td>
                    <td style={styles.td}>{admission.parentName}</td>
                    <td style={styles.td}>
                      <button
                        style={styles.actionButton}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor =
                            styles.actionButtonHover.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor =
                            styles.actionButton.backgroundColor)
                        }
                        onClick={() => handleDelete(admission._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" style={styles.noData}>
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
