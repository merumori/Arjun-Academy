import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaSchool } from "react-icons/fa";
import adminAvatar from "./css/boy.png"; // Ensure this path is correct

const AdminNavbar = () => {
  const adminName = "Admin"; // Can be dynamically set
  // const adminAvatar = "/images/admin-avatar.jpg"; // Make sure this path exists in public folder

  return (
    <>
      <Navbar expand="lg" className="admin-navbar" sticky="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="brand-text">
            <FaSchool className="brand-icon" /> ARJUN ACADEMY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <div className="admin-info d-flex align-items-center me-3">
                <img src={adminAvatar} alt="Admin" className="admin-avatar-img" />
                <span className="admin-name">{adminName}</span>
              </div>
              <Nav.Link as={Link} to="/admin/logout">
                <FiLogOut style={{ marginRight: "5px" }} />
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Internal CSS */}
      <style>{`
        .admin-navbar {
          background: linear-gradient(135deg, rgb(35, 204, 136), rgb(142, 207, 53));
          padding: 10px 0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .brand-text {
          font-size: 22px;
          font-weight: bold;
          color: white !important;
          display: flex;
          align-items: center;
        }

        .brand-icon {
          font-size: 26px;
          margin-right: 8px;
        }

        .nav-link {
          color: white !important;
          font-size: 16px;
          margin-left: 20px;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #222 !important;
          text-decoration: none;
        }

        .admin-info {
          color: white;
          font-size: 16px;
          font-weight: 500;
        }

        .admin-avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 8px;
          object-fit: cover;
          border: 2px solid white;
        }

        .admin-name {
          display: inline-block;
        }

        .custom-toggler {
          border: none;
          background-color: transparent;
        }

        @media (max-width: 768px) {
          .navbar-brand {
            margin-left: 0;
          }

          .admin-info {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default AdminNavbar;
