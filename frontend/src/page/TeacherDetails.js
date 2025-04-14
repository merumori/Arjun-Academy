import React, { useEffect, useState } from 'react';
import '../css/TeacherDetails.css';

const TeacherDetails = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('https://arjun-academy-4c7g.onrender.com/singalteacher')
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error('Error fetching teachers:', error));
  }, []);

  const getImagePath = (image) => {
    return image ? `https://arjun-academy-4c7g.onrender.com/${image}` : '/path/to/default-image.jpg';
  };

  return (
    <section className="teacher-details-area pt-120 pb-120">
      <div className="container">
        {teachers.map((teacher) => (
          <React.Fragment key={teacher._id}>
            <div className="row align-items-lg-center mt-none-30">
              <div className="col-lg-5 col-md-5">
                <div className="teacher-img mt-30">
                  <img
                    src={getImagePath(teacher.images?.[0])}
                    alt={teacher.name || 'Teacher Image'} // Added alt prop
                    className="img-fluid"
                    onError={(e) => {
                      e.target.src = '/path/to/default-image.jpg';
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-7">
                <div className="teacher-single-info mt-30">
                  <h3>{teacher.name}</h3>
                  <p>{teacher.about}</p>
                  <ul className="teacher-info-list mt-25">
                    <li>
                      <span className="list-name">Age:</span>
                      <span className="list-attr">{teacher.age} Years</span>
                    </li>
                    <li>
                      <span className="list-name">Address:</span>
                      <span className="list-attr">{teacher.address}</span>
                    </li>
                    <li>
                      <span className="list-name">Email:</span>
                      <span className="list-attr">{teacher.email}</span>
                    </li>
                    <li>
                      <span className="list-name">Phone:</span>
                      <span className="list-attr">{teacher.phone}</span>
                    </li>
                    <li>
                      <span className="list-name">Website:</span>
                      <span className="list-attr">
                        <a href={teacher.website} target="_blank" rel="noopener noreferrer">
                          {teacher.website}
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="list-name">Experience:</span>
                      <span className="list-attr">{teacher.experience}</span>
                    </li>
                  </ul>

                  <div className="social-links mt-35">
                    <a
                      href={teacher.facebook}
                      className="facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href={teacher.twitter}
                      className="twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href={teacher.instagram}
                      className="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={teacher.linkedin}
                      className="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-60">
              <div className="teacher-content">
                <h4>About Me</h4>
                <p>{teacher.aboutMe}</p>

                <div className="row mt-25 mb-40">
                  <div className="col-md-6">
                    <div className="mt-20">
                      <img
                        style={{ width: '200px' }}
                        src={getImagePath(teacher.images?.[1])}
                        alt={teacher.name || 'Teacher Image'} // Added alt prop
                        className="img-fluid"
                        onError={(e) => {
                          e.target.src = '/path/to/default-image.jpg';
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-20">
                      <img
                        style={{ width: '200px' }}
                        src={getImagePath(teacher.images?.[2])}
                        alt={teacher.name || 'Teacher Image'} // Added alt prop
                        className="img-fluid"
                        onError={(e) => {
                          e.target.src = '/path/to/default-image.jpg';
                        }}
                      />
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
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default TeacherDetails;
