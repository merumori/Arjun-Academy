import React from "react";
import "../css/abouthome.css"; // Import the CSS file for styling
import img from "../img/about/about.png"; // Replace this path if necessary

const AboutHome = () => {
  return (
    <div
      className="card mb-3 mx-auto d-flex align-items-center justify-content-center section-notch"
      style={{ maxWidth: "100%", background: "linear-gradient(135deg, rgb(35, 204, 136), rgb(142, 207, 53))", border: "none" }}
    >
      <div className="row g-0 align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={img}
            className="img-fluid rounded-start"
            alt="About Kindergarten"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h5 className="card-title text-white">Arjun Academy</h5>
            <p className="mb-3 text-white">
              Enthusiastically dominate competitive opportunities through
              transparent action. Compellingly seize innovative schemas
              through inter-mandated creative idea sources. Enthusiastically
              engage in client-centered relationships for excellent
              experiences.
            </p>
            <p className="text-white">
              Distinctively architect 24/7 services for wireless and
              e-business solutions. Efficiently communicate cooperative
              methods for empowerment through awesome strategies. Monotonously
              coordinate cross-functional niche markets while interactively
              utilizing viral techniques.
            </p>
            <div className="about-btn">
              <a className="btn  btn-lg px-4 py-2" href="contact.html">
                Admission Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
