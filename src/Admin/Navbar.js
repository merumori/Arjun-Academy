import React from "react";
import logo from "../img/arjun.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ toggleSidebar, isMobile, isSidebarOpen }) => {
  const navbarStyle = {
    background: "linear-gradient(135deg, rgb(35, 204, 136), rgb(142, 207, 53))",
    animation: "fadeIn 1s ease-in-out",
  };

  const fadeInKeyframes = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes glowEffect {
      0% { filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); }
      50% { filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8)); }
      100% { filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); }
    }
  `;

  return (
    <>
      <style>{fadeInKeyframes}</style>
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top px-3" style={navbarStyle}>
        {/* {isMobile && (
          <button className="btn me-2" onClick={toggleSidebar}>
            {isSidebarOpen ? "✕" : "☰"}
          </button>
        )} */}

        {/* Logo with Glow Effect */}
        <a className="navbar-brand" href="/" style={{ animation: "glowEffect 2s infinite alternate" }}>
          <img src={logo} alt="Arjun Academy Logo" height="40" />
        </a>

        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
{/* 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/admission-data">
                Admission Data
              </a>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="teacherDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher
              </button>
              <ul className="dropdown-menu" aria-labelledby="teacherDropdown">
                <li>
                  <a className="dropdown-item" href="/teacher-details">
                    Teacher Details
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/student">
                Student
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </div> */}

        <div className="d-flex align-items-center">
          <button className="btn btn-light me-2">⚙️</button>
          <button className="btn btn-danger">Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
