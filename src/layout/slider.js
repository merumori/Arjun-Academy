import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import slide1 from '../img/slide-01.jpg';
import slide2 from '../img/slide-02.jpg';
import slide3 from '../img/slide-03.jpg';
import '../css/slider.css';

const CarouselComponent = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide section-notch" data-bs-ride="carousel">
      <div className="carousel-inner">
        
        {/* First Slide */}
        <div className="carousel-item active">
          <div className="carousel-caption d-flex align-items-center">
            <div className="container text-start">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <h2 className="display-4 text-white">Welcome to Arjun Academy</h2>
                  <p className="lead text-white">
                    We offer a variety of classes that help you excel in your studies. Join us today!
                  </p>
                  <a href="/admission" className="btn btn-primary me-3">Admission Now</a>
                  <a href="/our-classes" className="btn btn-outline-light">Our Classes</a>
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slide1}
            className="d-block "
            alt="First Slide"
          />
        </div>

        {/* Second Slide */}
        <div className="carousel-item">
          <div className="carousel-caption d-flex align-items-center">
            <div className="container text-start">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <h2 className="display-4 text-white">Quality Education for Everyone</h2>
                  <p className="lead text-white">
                    Explore our extensive range of courses and programs designed for every student.
                  </p>
                  <a href="/admission" className="btn btn-primary me-3">Admission Now</a>
                  <a href="/our-classes" className="btn btn-outline-light">Our Classes</a>
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slide2}
            className="d-block w-100"
            alt="Second Slide"
          />
        </div>

        {/* Third Slide */}
        <div className="carousel-item">
          <div className="carousel-caption d-flex align-items-center">
            <div className="container text-start">
              <div className="row">
                <div className="col-lg-6 col-md-8">
                  <h2 className="display-4 text-white">Your Future Begins Here</h2>
                  <p className="lead text-white">
                    Get the skills and knowledge you need to succeed in today's competitive world.
                  </p>
                  <a href="/admission" className="btn btn-primary me-3">Admission Now</a>
                  <a href="/our-classes" className="btn btn-outline-light">Our Classes</a>
                </div>
              </div>
            </div>
          </div>
          <img
            style={{ height: '500px', width: '100%' }}
            src={slide3}
            className="d-block w-100"
            alt="Third Slide"
          />
        </div>

      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
