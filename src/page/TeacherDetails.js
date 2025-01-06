import React from 'react';
import '../css/TeacherDetails.css'; // Custom styling
import img1 from '../img/teacher/img-09.jpg';
import img2 from '../img/teacher/img-10.jpg';
import img3 from '../img/teacher/img-11.jpg';

const TeacherDetails = () => {
  return (
    <section className="teacher-details-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-lg-center mt-none-30">
          {/* Left Column: Image */}
          <div className="col-lg-5 col-md-5">
            <div className="teacher-img mt-30">
              <img src={img1} alt="Teacher" className="img-fluid" />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="col-lg-7 col-md-7">
            <div className="teacher-single-info mt-30">
              <h3>Morgan Be Rulax</h3>
              <p>
                Since joining Ozix in 2009, he has helped turn the company from a group of bright technology minds
                working with startups into a global Digital Product Engineering Services leader helping Fortune 500
                companies on their innovation agenda.
              </p>
              <ul className="teacher-info-list mt-25">
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Age  :-</span>
                  <span className="list-attr">21 Years</span>
                </li>
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Address  :-</span>
                  <span className="list-attr">Address Suite 2 & 7 Melbourne, Australia</span>
                </li>
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Email  :-</span>
                  <span className="list-attr">info@gamil.com</span>
                </li>
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Phone  :-</span>
                  <span className="list-attr">+021 548 736 982 ,01236985</span>
                </li>
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Website  :-</span>
                  <span className="list-attr">www.Arjun.com</span>
                </li>
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Experience  :-</span>
                  <span className="list-attr">3 Years</span>
                </li>
                <li className="d-flex flex-wrap justify-content-start">
                  <span className="list-name">Interview  :-</span>
                  <span className="list-attr">Read The Interview</span>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="social-links mt-35">
                <a href="#!" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#!" className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="row mt-60">
          <div className="teacher-content">
            <h4>About Me</h4>
            <p>
              Since joining Ozix in 2009, he has helped turn the company from a group of bright technology minds
              working with startups into a global Digital Product Engineering Services leader helping Fortune 500
              companies on their innovation agenda. In Chriss’s time as President and CEO of the company, it has
              experienced explosive growth in size and revenue – all while developing a culture that fosters engaged
              employees around innovation.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consectetur aperiam eos voluptate
              dolorum ex soluta quia fugiat totam optio doloremque sint, perspiciatis eius ullam repellat similique
              facilis accusantium atque.
            </p>

            <div className="row mt-25 mb-40">
              <div className="col-md-6">
                <div className="mt-20">
                  <img src={img2} alt="Teacher" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mt-20">
                  <img src={img3} alt="Teacher" className="img-fluid" />
                </div>
              </div>
            </div>

            <p>
              Prior to joining Ozix, he spent 20+ years at Inmosys, where he held a wide range of global leadership
              roles, from services to products, and across operations and sales. Most recently, he was SVP & Global
              Head of the Manufacturing business. He is also an avid cook and history buff.
            </p>
            <p>
              He is a frequent speaker on the topics of global innovation and digital disruption. You can find him
              dining late at night with the chefs of the hotels where he stays during his travels or reading in his
              home library.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetails;
