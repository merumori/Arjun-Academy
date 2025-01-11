import React from "react";
import logo from '../img/arjun.png';

const Navbar = () => {
    const toggleMenu = () => {
        const menu = document.querySelector(".navbar-links");
        menu.classList.toggle("active");
      };
    
      return (
        <div>
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand logo" href="index.php">
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
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link bold-text" href="/view-admissions">
                      Addmision data
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bold-text" href="#">
                      Courses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bold-text" href="#">
                      Students
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bold-text" href="#">
                      Techaer
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bold-text" href="#">
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link bold-text" href="#">
                      Settings
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link logout-btn bold-text" href="logout.php">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
         
        </div>
      );
};

export default Navbar;
