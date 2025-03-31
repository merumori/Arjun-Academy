// About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../css/About.css'; // Import your CSS file for custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';

import img from '../img/about/about-02.jpg';
import CounterArea from '../layout/CounterArea';
import videoThumbnail from '../img/video/img-01.jpg';
import BrandArea from '../layout/BrandArea';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-area pt-120 pb-120">
        <div className="container">
          <div className="card shadow-sm">
            <div className="row g-0 align-items-center">
              {/* Card Image */}
              <div className="col-md-6">
                <img src={img} alt="About" className="img-fluid rounded-start" />
              </div>

              {/* Card Content */}
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title">With Efficiency to More Opportunities</h2>
                  <p className="card-text">
                    Why I say old chap that is spiffing bodge, blag pardon me mufty
                    Oxford butty bubble and squeak wind up, brown bread the full monty
                    bloke ruddy cras tickety-boo squiffy, blag pardon me mufty Oxford
                    butty bubble and squeak wind up.
                  </p>
                  <ul className="about-features list-unstyled">
                    <li><i className="bi bi-check-circle-fill"></i> Best Learning School for Kids</li>
                    <li><i className="bi bi-check-circle-fill"></i> Indoor/Outdoor Games for Little Kids</li>
                    <li><i className="bi bi-check-circle-fill"></i> Professional & Qualified Teacher</li>
                    <li><i className="bi bi-check-circle-fill"></i> Indoor/Outdoor Games for Little Kids</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div>
       <CounterArea />
       </div>
        

        {/* Video Section */}
        <div className="container mt-5">
          <div className="video-image position-relative">
            <img 
              src={videoThumbnail} 
              alt="Video Thumbnail" 
              className="img-fluid rounded" 
            />
            <a 
              className="popup-video video-icon d-flex align-items-center justify-content-center" 
              href="https://www.youtube.com/watch?v=RHgbJr4pf1A" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
       
          <BrandArea />
      
      </section>
    </>
  );
};

export default About;
