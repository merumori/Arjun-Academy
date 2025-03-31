import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const AdminNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="admin-navbar">
        <Navbar.Brand href="/">ARJUN ACADEMY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/admin/settings">Settings</Nav.Link>
            <Nav.Link href="/admin/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Internal CSS */}
      <style>{`
        .admin-navbar {
          background-color: #1bcf5c;
          padding: 12px;
        }

        .navbar-brand {
          font-size: 22px;
          font-weight: bold;
          color: white !important;
        }

        .nav-link {
          color: white !important;
          font-size: 16px;
        }

        .nav-link:hover {
          color: #222 !important;
        }
      `}</style>
    </>
  );
};

export default AdminNavbar;
