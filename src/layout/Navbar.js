import React from 'react';
import '../css/Navbar.css'; // Import the custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { useNavigate } from 'react-router-dom';
import logo from '../img/arjun.png'

const NavBar = () => {
  const navigate = useNavigate();

  const handleAdmissionClick = () => {
    navigate('/admission'); // Navigate to the admission route
  };
  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-4 py-2">
        <div className="d-flex align-items-center">
          <span className="me-3">
            <i className="bi bi-clock"></i> 9:30am - 6:30pm Mon - Sun
          </span>
          <span className="me-3">
            <i className="bi bi-telephone"></i> +800-123-4567 6587
          </span>
          <span>
            <i className="bi bi-geo-alt"></i> Anmoore Road Brooklyn, NY 230
          </span>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://vimeo.com" aria-label="Vimeo">
            <i className="bi bi-vimeo"></i>
          </a>
          <a href="https://skype.com" aria-label="Skype">
            <i className="bi bi-skype"></i>
          </a>
          <a href="/rss-feed" aria-label="RSS">
            <i className="bi bi-rss"></i>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        <a className="navbar-brand logo" href="/">
  <img src={logo} alt="Arjun Academy Logo" className="img-fluid" />
</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">ABOUT</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/pages"
                  id="pagesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a> */}
                 <li className="nav-item">
                <a className="nav-link" href="/teachers">Teachers</a>
              </li>
                {/* <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <li><a className="dropdown-item" href="/teachers">Teachers</a></li> */}
                  {/* <li><a className="dropdown-item" href="/teacherDetails">Teachers Details</a></li> */}
              
                {/* </ul> */}
              {/* </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/class">CLASS</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/shop"
                  id="shopDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SHOP
                </a>
                <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                  <li><a className="dropdown-item" href="/shop1">Shop Item 1</a></li>
                  <li><a className="dropdown-item" href="/shop2">Shop Item 2</a></li>
                  <li><a className="dropdown-item" href="/shop3">Shop Item 3</a></li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/blog"
                  id="blogDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  POST
                </a>
                <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                  <li><a className="dropdown-item" href="/EventPost"> Event Post </a></li>
                  <li><a className="dropdown-item" href="/Eventvideo">Event video</a></li>
          
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">CONTACT</a>
              </li>
            </ul>
            <button className="btn btn-primary admission-btn" onClick={handleAdmissionClick}>
      ADMISSION NOW
    </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
