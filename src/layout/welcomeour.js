import React from "react";
import "../css/welcomeour.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const WelcomeComponent = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Welcome to Our Arjun Academy</h1>
      <p className="mb-5">
        Here is what you can expect from a house cleaning from a Handy professional. Download our app to share further cleaning details and instructions!
      </p>
      <div className="row">
        {/* Card 1: Active Learning */}
        <div className="col-md-3">
          <div className="card feature-card">
            <div className="icon-container bg-green">
              <i className="fas fa-book-reader"></i> {/* Active Learning Icon */}
            </div>
            <h5 className="mt-3">Active Learning</h5>
            <p>Since have been visionary reliable software engineers, partners have been visionary.</p>
          </div>
        </div>
        
        {/* Card 2: Expert Teachers */}
        <div className="col-md-3">
          <div className="card feature-card">
            <div className="icon-container bg-orange">
              <i className="fas fa-chalkboard-teacher"></i> {/* Expert Teachers Icon */}
            </div>
            <h5 className="mt-3">Expert Teachers</h5>
            <p>Since have been visionary reliable software engineers, partners have been visionary.</p>
          </div>
        </div>
        
        {/* Card 3: Parents Day */}
        <div className="col-md-3">
          <div className="card feature-card">
            <div className="icon-container bg-blue">
              <i className="fas fa-users"></i> {/* Parents Day Icon */}
            </div>
            <h5 className="mt-3">Parents Day</h5>
            <p>Since have been visionary reliable software engineers, partners have been visionary.</p>
          </div>
        </div>
        
        {/* Card 4: Music Lessons */}
        <div className="col-md-3">
          <div className="card feature-card">
            <div className="icon-container bg-pink">
              <i className="fas fa-music"></i> {/* Music Lessons Icon */}
            </div>
            <h5 className="mt-3">Music Lessons</h5>
            <p>Since have been visionary reliable software engineers, partners have been visionary.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
